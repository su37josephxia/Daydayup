
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


