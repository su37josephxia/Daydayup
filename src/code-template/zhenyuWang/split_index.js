function parse(str){
  const split_tag = {
    front_start:`
    // 前置代码 start
`,
    front_end:`
    // 前置代码 end
`,
    answer_start:`
        // 答案 start
`,
    answer_end:`    // 答案 end`,
    template_start:`
    // 模板 start
`,
    template_end:`
    // 模板 end
`,
    back_start:`
    // 后置代码 start
`,
    back_end:`
    // 后置代码 end
        `
  }
  const front = str.split(split_tag.front_end)[0].split(split_tag.front_start)[1],
  answer = str.split(split_tag.answer_start)[1].split('\n'+split_tag.answer_end)[0],
  templateStr = str.split(split_tag.template_end)[0].split(split_tag.template_start)[1],
  template = templateStr.split(split_tag.answer_start)[0]+templateStr.split(split_tag.answer_start)[1].split(split_tag.answer_end)[1],
  back = str.split(split_tag.back_end)[0].split(split_tag.back_start)[1]
  // 前置代码内容 答案内容 代码模板内容 后置代码内容
  return {front, answer, template, back}
}
module.exports = parse;

