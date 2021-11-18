
 module.exports =   (template) => {
  const Annotation = {
    frontMode :{
        start:'// 前置代码 start',
        end:'// 前置代码 end',
        code:[],
        jug:null,
    },
    templateMode:{
        start:'// 模板 start',
        end:'// 模板 end',
        code:[],
        jug:null,
    },
    answerMode:{
        start:'// 答案 start',
        end:'// 答案 end',
        code:[],
        jug:null,
    },
    backMode:{
        start:'// 答案 start',
        end:'// 答案 end',
        code:[],
        jug:null,
    }
  }

  const handleTemplate = (template)=>{
    let templateArr =  template.split("\n")
    for(let i=0; i<templateArr.length; i++){
        for(let key in Annotation){
            //判断开始与结束是否完整 完整则加入到code 数组
            if(templateArr[i].includes(Annotation[key].end) ){
                Annotation[key].jug = false
            }else if(templateArr[i].includes(Annotation[key].start)){
                Annotation[key].jug = true
            }
            if(Annotation[key].jug){
                Annotation[key].code.push(templateArr[i])
            }
        }
    }

    Annotation.templateMode.code = Annotation.templateMode.code.filter((item)=>{
        // 将答案start end加入到templateMode 中
        let arr = Annotation.answerMode.code.concat([Annotation.answerMode.start,Annotation.answerMode.end])
        let result = arr.find((ritem)=>{
            return item.indexOf(ritem) !== -1
        })
        return !result
    })
  }
  handleTemplate(template)
  return {
      front:Annotation.frontMode.code.join('/n'),
      template:Annotation.templateMode.code.join('/n'),
      answer:Annotation.answerMode.code.join('/n'),
      back:Annotation.backMode.code.join('/n')
  }
};
