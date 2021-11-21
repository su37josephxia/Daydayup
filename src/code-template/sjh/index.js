
 module.exports = (template) => {
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
        start:'// 后置代码 start',
        end:'// 后置代码 end',
        code:[],
        jug:null,
    }
  }

  const handleTemplate = (template) => {
    try {
        // 1、处理包含关系(也可用正则+replace)
        let ans = template.slice(
            template.indexOf(Annotation.answerMode.start),
            template.indexOf(Annotation.answerMode.end) + Annotation.answerMode.end.length + 1
        )
        template = template.replace(ans, '') + ans

        // 2.1、字符串截取(切换为数组截取相同)
        const getCode = (temp, mode) => {
            mode.code = temp.slice(
                temp.indexOf(mode.start),
                temp.indexOf(mode.end) + mode.end.length
            ).split('\n').slice(1, -1).join('\n')
        }
        Object.values(Annotation).map(mode => getCode(template, mode))

        // 2.2、字符串正则替换(获取包含内容的正则不会)
        // const getCode = (temp, mode) => {
        //     const reg = '这是一个不会写的一个正则'
        //     temp.replace(reg, function(rs) {
        //         mode.code = rs.slice('\n').slice(1, -1)
        //         return ''
        //     })
        // }
        // Object.values(Annotation).map(mode => getCode(template, mode))

        // 2.3、状态机
        // let star = false
        // const getCode = (temp, mode) => {
        //     temp.split('\n').map(text => {
        //         if (text.indexOf(mode.start) > -1) {
        //             star = true
        //         } else if (text.indexOf(mode.end) > -1) {
        //             star = false
        //             mode.code = mode.code.join('\n')
        //         } else if (star === true) {
        //             mode.code.push(text)
        //         }
        //     })
        // }
        // Object.values(Annotation).map(mode => getCode(template, mode))

        // 2.4、正则(03:16太困了...先不写了)

        // 2.5、栈

        // console.log(Annotation)
    } catch (err) {
        console.log(err)
    }
  }
  handleTemplate(template)
  return {
      front:Annotation.frontMode.code,
      template:Annotation.templateMode.code,
      answer:Annotation.answerMode.code,
      back:Annotation.backMode.code
  }
};
