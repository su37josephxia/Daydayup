const FRONT_START = '// 前置代码 start'
const FRONT_END = '// 前置代码 end'
const TEMPLATE_START = '// 模板 start'
const TEMPLATE_END = '// 模板 end'
const ANSWER_START = '// 答案 start'
const ANSWER_END = '// 答案 end'
const BACK_START = '// 后置代码 start'
const BACK_END = '// 后置代码 end'


module.exports = (template) => {
    let frontStr = ''
    let templateStr = ''
    let answerStr = ''
    let backStr = ''
    let currentToken = ''
    let currentLine

    parse(template)

 
    function isPlainLine(){
        return !isMarkLine()

    }

    function isMarkLine(mark){
        const target= currentLine.trim()

        if(mark){
            return target === mark

        }else{
            return ( 
                target === FRONT_START ||
                target === FRONT_END ||
                target === TEMPLATE_START ||
                target === TEMPLATE_END ||
                target === ANSWER_START ||
                target === ANSWER_END ||
                target === BACK_START ||
                target === BACK_END
            )

        }
    }

    //解析代码
    function parse(template) {
        const arr = template.split('\n')

        let state = beforeFrontStart;

        arr.forEach(line => {
            currentLine = line
            state = state();
        })

        if(state !== End)throw new Error('End error')
    }


    function beforeFrontStart(){
        // 1.只能 => FRONT_START
        if(isMarkLine(FRONT_START)){
            return frontStart
        }else if (isPlainLine()){
            return beforeFrontStart
        }else{
            throw new Error('beforeFrontStart error')
        }
    }


    //前置开始
    function frontStart() {
        if(isMarkLine(FRONT_END)){
            return frontEnd()
        }else if(isPlainLine()){
            currentToken += `${currentToken}${currentLine}\n`
            return frontStart
        }else{
            throw new Error('frontStart error')

        }
    }


    //前置结束
    function frontEnd() {
        frontStr = currentToken
        currentToken = ''
        return beforeTemplateStart
    }


    function beforeTemplateStart(){
        // 1.只能 => TEMPLATE_START
        if(isMarkLine(TEMPLATE_START)){
            return templateStart
        }else if (isPlainLine()){
            return beforeTemplateStart
        }else{
            throw new Error('beforeTemplateStart error')

        }
    }


    //模板开始
    function templateStart() {
        if(isMarkLine(TEMPLATE_END)){
            return templateEnd()
        }else if(isMarkLine(ANSWER_START)){
            templateStr = currentToken
            currentToken = ''
            return answerStart
        }else if(isPlainLine()){
            currentToken = `${currentToken}${currentLine}\n`
            return templateStart
        }else{
            throw new Error('templateStart error')

        }
       
    }


    //模板结束
    function templateEnd() {
        templateStr = `${templateStr}${currentToken}` //中间会有答案，所以模板是由前后两部分组成，这里要用+
        currentToken = ''
        return beforeBackStart
    }


    //回答开始
    function answerStart() {
        if (isMarkLine(ANSWER_END)) {
            return answerEnd()
        } else if(isPlainLine()){
            currentToken = `${currentToken}${currentLine}\n`
            return answerStart
        }else{
            throw new Error('answerStart error')

        }
    }


    //回答结束
    function answerEnd() {
        answerStr = currentToken
        currentToken = ''
        return templateStart
    }


    function beforeBackStart(){
    // 1.只能 => BACK_START
        if(isMarkLine(BACK_START)){
            return backStart
        }else if (isPlainLine()){
            return beforeBackStart
        }else{
            throw new Error('beforeBackStart error')

        }
    }


    //后置开始
    function backStart() {
        if (isMarkLine(BACK_END)) {
            return backEnd()
        } else if(isPlainLine()) {
            currentToken = `${currentToken}${currentLine}\n`
            return backStart
        }else{
            throw new Error('backStart error')

        }
    }


    //后置结束
    function backEnd() {
        backStr = currentToken
        currentToken = ''
        return End
    }

    
    //结束
    function End() {
        return End
    }

    if(!frontStr)throw new Error('frontStr error')
    if(!templateStr)throw new Error('templateStr error')
    if(!backStr)throw new Error('backStr error')

    return {
        front: frontStr,
        template: templateStr,
        answer: answerStr,
        back: backStr
    }
};