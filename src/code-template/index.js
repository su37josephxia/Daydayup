module.exports = (template) => {
    const FRONT_START = '// 前置代码 start'
    const FRONT_END = '// 前置代码 end'
    const TEMPLATE_START = '// 模板 start'
    const TEMPLATE_END = '// 模板 end'
    const ANSWER_START = '// 答案 start'
    const ANSWER_END = '// 答案 end'
    const BACK_START = '// 后置代码 start'
    const BACK_END = '// 后置代码 end'

    let front = back = template = answer = ''
    let currentToken = ''

    parse(code)

    //解析代码
    function parse(code) {
        let state = frontStart;
        const arr = code.split('\n')

        arr.forEach(line => {
            state = state(line.trim());
        })
    }

    //前置开始
    function frontStart(string) {
        if (string === FRONT_END) {
            return frontEnd()
        } else if (string === FRONT_START) {
            return frontStart
        } else {
            currentToken += string
            return frontStart
        }
    }

    //前置结束
    function frontEnd() {
        front = currentToken
        currentToken = ''
        return templateStart
    }

    //模板开始
    function templateStart(string) {
        if (string === TEMPLATE_END) {
            return templateEnd()
        } else if (string === TEMPLATE_START) {
            return templateStart
        } else if (string === ANSWER_START) {
            template = currentToken
            currentToken = ''
            return answerStart
        } else {
            currentToken += string
            return templateStart
        }
    }

    //模板结束
    function templateEnd() {
        template += currentToken //中间会有答案，所以模板是由前后两部分组成，这里要用+
        currentToken = ''
        return backStart
    }

    //回答开始
    function answerStart(string) {
        if (string === ANSWER_END) {
            return answerEnd()
        } else if (string === ANSWER_START) {
            return answerStart
        } else {
            currentToken += string
            return answerStart
        }
    }

    //回答结束
    function answerEnd() {
        answer = currentToken
        currentToken = ''
        return templateStart
    }

    //后置开始
    function backStart(string) {
        if (string === BACK_END) {
            return backEnd()
        } else if (string === BACK_START) {
            return backStart
        } else {
            currentToken += string
            return backStart
        }
    }

    //后置结束
    function backEnd() {
        back = currentToken
        currentToken = ''
        return End
    }

    //结束
    function End() {}

    return {
        front,
        template,
        answer,
        back
    }
};