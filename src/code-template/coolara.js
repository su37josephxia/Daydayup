module.exports = (code) => {
  const front = code
    .match(/(?<=\/\/ 前置代码 start\n)[\s\S]*(?=\/\/ 前置代码 end\n)/)[0]
    .trim();
  const answer = code
    .match(/(?<=\/\/ 模板start\n)[\s\S]*(?=\/\/ 答案)/)[0]
    .trim();
  const template = `function sort(arr) {

    return arr;
}`;
  const back = code
    .match(/(?<=\/\/ 后置代码 start\n)[\s\S]*(?=\/\/ 后置代码 end\n)/)[0]
    .trim();

  return { front, answer, template, back };
  return {
    front: `var input = [1,3,2]`,
    template: `function sort(arr) {

    return arr;
}`,
    answer: `
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
        }`,
    back: `console.log(sort(input))`,
  };
};
