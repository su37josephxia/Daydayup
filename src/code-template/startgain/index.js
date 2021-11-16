/**
 * 模版拆分
 */
function regGenerator(regStart, regEnd) {
  return new RegExp(
    `(.*)\/\/ ${regStart}\n(((.*)\n)*((.*)))\n(.*)\/\/ ${regEnd}\n`
  );
}
function getRegResults(code, reg, i = 0, trim = true) {
  var res = code.match(reg) && code.match(reg)[i];
  if (trim) {
    res = res ? res.trim() : res;
  }
  return res;
}
module.exports = function (code) {
  var frontCodeReg = regGenerator("前置代码 start", "前置代码 end");
  var answerCodeReg = regGenerator("模板start", "答案");
  var templateCodeReg = regGenerator("模板start", "模板 end");
  var onlyAnswerCodeReg = regGenerator("答案 start", "答案");
  var backCodeReg = regGenerator("后置代码 start", "后置代码 end");

  var front = getRegResults(code, frontCodeReg, 2);
  var answer = getRegResults(code, answerCodeReg, 2);
  var onlyAnswer = getRegResults(code, onlyAnswerCodeReg, 0, false);
  var template = getRegResults(code, templateCodeReg, 2);
  template = template.replace(onlyAnswer, "\n");
  var back = getRegResults(code, backCodeReg, 2);
  return { front, answer, template, back };
};
