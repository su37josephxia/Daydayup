/**
 * 模版拆分
 */
 function getTemplate(template) {
  const templateArr = template.split("\n");
  let stack = [] // 存放注释的栈，遇到end弹出
    , codeArr = [] // 存放code数组的数组，如果遇到代码行，看stack的长度，始终操作stack.length - 1的code数组
  let res = {}
  let map = {
    '// 前置代码 start': 'front',
    '// 答案 start': 'answer',
    '// 模板 start': 'template',
    '// 后置代码 start': 'back',
  }
  templateArr.forEach((item) => {
    if (item.indexOf('// ') > -1) {
      if (item.indexOf('start') > -1) { // 遇到start压栈
        stack.push(item.trim())
      } else if (item.indexOf('end') > -1){ // 遇到end组装res
        const len = stack.length - 1
        let key = map[stack.pop()]
        res[key] = codeArr[len].join('\n')
        codeArr.splice(len, 1)
      }
    } else if (stack.length > 0) { // 其他时候当注释栈里有东西，code代表栈顶注释的代码
      if (!codeArr[stack.length - 1]) codeArr[stack.length - 1] = []
      codeArr[stack.length - 1].push(item)
    }
  });
  
  return res
}

const result = getTemplate(`
// 前置代码 start
var input = [1,3,2]
// 前置代码 end
// 模板 start
function sort(arr) {
    // 答案 start
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                var temp = arr[j+1];        // 元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
// 答案 end
    return arr;
}
// 模板 end
// 后置代码 start
console.log(sort(input))
// 后置代码 end
    `);

console.log(result);
