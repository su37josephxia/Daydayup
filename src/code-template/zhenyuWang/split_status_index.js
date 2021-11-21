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


function parse(str){
  const split_tag = {
    front_start:`    // 前置代码 start`,
    front_end:`    // 前置代码 end`,
    answer_start:`        // 答案 start`,
    answer_end:`    // 答案 end`,
    template_start:`    // 模板 start`,
    template_end:`    // 模板 end`,
    back_start:`    // 后置代码 start`,
    back_end:`    // 后置代码 end`
  },
  arr = str.split('\n')
  let front = '',
  frontStart = false,
  frontEnd = false,
  answer = '',
  answerStart = false,
  answerEnd = false,
  template = '',
  templateStart = false,
  templateEnd = false,
  back = '',
  backStart = false,
  backEnd = false;
  for(let i = 0;i<arr.length;i++){
    // front start
    if(arr[i] === split_tag.front_start){
      frontStart = true
      continue
    }
    if(arr[i] === split_tag.front_end){
      frontEnd = true
      continue
    }
    if(frontStart&&!frontEnd){
      if(front) front+=`\n${arr[i]}`
      else front+=`\n ${arr[i]}`
    }
    // front end

    // answer start
    if(arr[i] === split_tag.answer_start){
      answerStart = true
      continue
    }
    if(arr[i] === split_tag.answer_end){
      answerEnd = true
      continue
    }
    if(answerStart&&!answerEnd){
      if(answer) answer+=`\n${arr[i]}`
      else answer+=`\n ${arr[i]}`
    }
    // answer end
    
    // template start
    if(arr[i] === split_tag.template_start){
      templateStart = true
      continue
    }
    if(arr[i] === split_tag.template_end){
      templateEnd = true
      continue
    }
    if((templateStart&&!answerStart) || (answerEnd&&!templateEnd)){
      if(template) template+=`\n${arr[i]}`
      else template+=`\n ${arr[i]}`
    }
    // template end
    
    // back start
    if(arr[i] === split_tag.back_start){
      backStart = true;
      continue
    }
    if(arr[i] === split_tag.back_end){
      backEnd = true
      continue
    }
    if(backStart&&!backEnd){
      if(back)  back+=`\n${arr[i]}`
      else  back+=`\n ${arr[i]}`
    }
    // back end
  }
  front = front.substring(2)
  answer = answer.substring(2)
  template = template.substring(2)
  back = back.substring(2)
  // 前置代码内容 答案内容 代码模板内容 后置代码内容
  return {front, answer, template, back}
}
module.exports = parse;

