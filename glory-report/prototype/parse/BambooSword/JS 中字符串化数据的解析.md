# JS 中字符串化数据的解析

在工作中我们遇到后端传过来的JSON字符串时，我们通常使用 `JSON.parse()`来进行解析。这样做本身没有问题，但是会在某些情况下出现报错。



## 翻车现场

最近在处理字符串化的数据时，代码报错了，现场情况是怎么样的呢，大家请看下面的模拟场景

![image-20211028080645328](./parse.assets/image-20211028080645328.png)



这是为什么呢，一般遇到这种情况我会查看MDN文档，看看自己的用法是否是有问题。果然，其中有两条很醒目：

> [JSON.parse() does not allow trailing commas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#json.parse_does_not_allow_trailing_commas)
>
> [JSON.parse() does not allow single quotes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#json.parse_does_not_allow_single_quotes)

而且标准的[`JSON`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)格式中也明确规定

> **Objects and Arrays**
>
> Property names must be double-quoted strings; [trailing commas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas) are forbidden.

于此再看上图，我们犯了两个错误

1. jsonStr 字符串内的 `name` 和  `arr` 应该用 "double-quote" 包裹起来
2. `[1,2,3,]`中的末尾`,`需要删除。（trailing commas are forbidden）。



嗯。。。那么问题来了，我们在解析字符串的过程中，可能会遇到类似上面的不符合JSON规范的字符串，那么我们该如何有效的解析出其中的数据呢？

首先映入我脑海的是 `eval()`这个方法，因为 `eval()` 函数会将传入的字符串当做 JavaScript 代码进行执行。

那么我们看看效果如何呢？

```js
const jsonStr = '{name: "hello", arr:[1,2,3,]}'
eval(jsonStr)
// ERROR: Uncaught SyntaxError: Unexpected token ':' at <anonymous>:1:6
```

en... 为什么会报错呢，查看一下报错原因是 意外的 token `:`。思考了一下`eval`会解析我们传入的字符串，而我们的字符串是以 `{}`为开头和结尾，这样JS引擎会把它当成一个语句块来处理，所以必须强制性的将它转换成一种表达式。

#### 如何转换为表达式呢？

最简单的方式是两边加入括号。

我们来实验一下

```js
const jsonStr = '{name: "hello", arr:[1,2,3,]}'
eval(`(${jsonStr})`)
// return {name: 'hello', arr: Array(3)}
```
那我们再试一下其他的能让JS引擎把它当成表达式的写法。
```js
const jsonStr = '{name: "hello", arr:[1,2,3,]}'
eval(`!${jsonStr}`)
// return false； 虽然得不到我们想要的解析出来的结果，而是 false, 但也验证了我们的猜想，刚刚的报错的确是因为在解析的时候把{}当成代码块来处理了。
```

看来这样似乎是解决了我们的问题。

那么问题又来了，这个eval的方法有没有什么副作用呢？ 在 [MDN Web Docs](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval#don.27t_use_eval.21)给出了明确信息，在这里我摘录两条比较重要的放到下面。

1. 如果你间接的使用 `eval()`，比如通过一个引用来调用它，而不是直接的调用 `eval`。 从 [ECMAScript 5](https://www.ecma-international.org/ecma-262/5.1/#sec-10.4.2) 起，它工作在全局作用域下，而不是局部作用域中。
2. `eval()` 是一个危险的函数， 它使用与调用者相同的权限执行代码。如果你用 `eval()` 运行的字符串代码被恶意方（不怀好意的人）修改，您最终可能会在您的网页/扩展程序的权限下，在用户计算机上运行恶意代码。更重要的是，第三方代码可以看到某一个 `eval()` 被调用时的作用域，这也有可能导致一些不同方式的攻击。相似的 [`Function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function) 就不容易被攻击。

看来在编写代码过程中，我们尽量不要使用eval，如果使用了，也要确保自己写有eval内容块的代码不会被用户或者第三方代码访问到。

如果用户或者第三方写的东西我们使用了eval调用会有什么后果呢，一段代码来演示一下

```js
const userData = '{name: "bamboo", age: alert("It is a secret!")}'

eval(`(${userData})`)

```

在浏览器中调用了 ``alert`方法。如果这个`alert`方法是一个恶意攻击代码，那么会变得非常糟糕。

![image-20211125175050012](./parse.assets/image-20211125175050012.png)



### `Function`

如果你实在需要使用 `eval`来解析类JSON代码，那么建议使用 `Function`,因为这个方法会稍微多一些安全保证，而且执行效率上会比eval高很多。

```js
// 使用 eval 的糟糕代码
function looseJsonParse(obj){
    return eval("(" + obj + ")");
}
console.log(looseJsonParse(
   "{a:(4-1), b:function(){}, c:new Date()}"
))

// 不使用 eval的更好的代码
function looseJsonParse(obj){
    return Function('"use strict";return (' + obj + ')')();
}
console.log(looseJsonParse(
   "{a:(4-1), b:function(){}, c:new Date()}"
))

```

比较上面的两个代码片段，两个代码片段似乎是以相同的方式工作，但再想一想：eval的这个代码的速度要慢得多。 注意`c: new Date()`在执行体中。 在没有eval的函数中，对象在全局范围内被用来进行计算，因此浏览器可以放心的假设`Date`是来自`window.Date`的而不是一个名为`Date`的局部变量。 

因此，在`eval()`版本的代码中，浏览器被迫进行高代价的查找调用以检查是否存在名为Date()的任何局部变量。 与`Function()`相比，这是非常低效的。

在类似的情况下，如果您确实希望能够从`Function()`内部的代码调用`Date`函数，该怎么办？ 你应该躲避并退回到`eval()`吗？ 绝对不是，永远不要这么做。而是尝试用闭包等方法来解决问题。

```js
function Date(n){
    return ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][n%7 || 0];
}
function runCodeWithDateFunction(obj){
    return Function('"use strict";return (' + obj + ')')()(
        Date
    );
}
console.log(runCodeWithDateFunction(
   "function(Date){ return Date(5) }"
))
```



这就是我们这次学习的内容，如果转移字符串尽量用`JSON.parse`,在遇到`JSON.parse`无法解析的内容时，我们可以使用`eval`或者`Function`,但我就尽量使用`Function`而不是`eval`,来提升代码的安全性和效率。而且无论使用`eval`或者`Function`都不要用它来直接解析用户或者第三方的数据。

