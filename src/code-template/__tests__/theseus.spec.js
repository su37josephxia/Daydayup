// describe("代码模板分离", () => {
//   test('正常系', () => {
const code = `
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
        `;

// const parse = require('../theseus')
const parse = require('../theseus.machine')
const {
  front,
  template,
  answer,
  back
} = parse(code)
// console.log(
//   'front=>' + front,
//   'template=>' + template,
//   'answer=>' + answer,
//   'back=>' + back
// );
//   });

//   // TODO: 异常系 所有违反规定的依赖抛error
// });