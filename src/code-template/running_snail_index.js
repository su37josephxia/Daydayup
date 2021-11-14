const code = `
  // 前置代码 start
  var input = [1,3,2]
  // 前置代码 end

  // 模板start
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
    // 答案

    return arr;
  }
  // 模板 end

  // 后置代码 start
  console.log(sort(input))
  // 后置代码 end
`;
function parse(str){
  const front = str.split('// 前置代码 end')[0].split('// 前置代码 start')[1],
  answer = str.split('// 答案 start')[1].split('// 答案')[0],
  templateStr = str.split('// 模板 end')[0].split('// 模板start')[1],
  template = templateStr.split('// 答案 start')[0]+templateStr.split('// 答案 start')[1].split('// 答案')[1],
  back = str.split('// 后置代码 end')[0].split('// 后置代码 start')[1]
  // 前置代码内容 答案内容 代码模板内容 后置代码内容
  return {front, answer, template, back}
}
const {front, answer, template, back} = parse(code);

console.log('front',front)
console.log('answer',answer)
console.log('template',template)
console.log('back',back)

module.exports = parse;

