module.exports = (template) => {
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
