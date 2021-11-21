module.exports = (template) => {
  //思路：
  //1.循环遍历模板字符串
  //2.遇到反斜杠进入标签状态，再等待一个反斜杠
  //3.等到反斜杠进入标签名状态
  //4.遇到换行符提交标签
  //5.其它情况为代码部分，加入缓冲区，并且继续处理

  const FRONT_START = '前置代码start'
  const FRONT_END = '前置代码end'
  const TEMPLATE_START = '模板start'
  const TEMPLATE_END = '模板end'
  const ANSWER_START = '答案start'
  const ANSWER_END = '答案end'
  const BACK_START = '后置代码start'
  const BACK_END = '后置代码end'

  //tagNames中存储所有有效的标签
  const tagNames = [
    FRONT_START,
    FRONT_END,
    TEMPLATE_START,
    TEMPLATE_END,
    ANSWER_START,
    ANSWER_END,
    BACK_START,
    BACK_END
  ]

  //利用栈的特性处理嵌套的标签
  let stack = [{
    type: 'template',
    children: []
  }]

  let currentToken = {
    tagName: '', //当前行'//'后面的字符串去掉空格后得到标签名
    content: '' //保存当前处理的内容，处理注释的时候用
  }

  let currentTextNode = null //当前处理的文本节点

  function emit(token) {
    let top = stack[stack.length - 1];

    if (token.type === 'startTag') {
      let element = {
        type: 'element',
        tagName: token.tagName,
        children: []
      }

      top.children.push(element)
      stack.push(element) //将当前元素入栈

      currentToken = {
        tagName: '',
        content: ''
      }

      currentTextNode = null
    } else if (token.type === 'endTag') {
      //去掉start、end进行对比，如果相等说明标签开闭正确
      if (top.tagName.replace('start', '') === token.tagName.replace('end', '')) {
        currentToken = {
          tagName: '',
          content: ''
        }
        stack.pop() //标签处理完成后出栈
      } else {
        throw new Error('标签开始和结束不匹配!')
      }

      currentTextNode = null
    } else if (token.type === 'text') {
      if (currentTextNode === null) {
        currentTextNode = {
          type: 'text',
          content: ''
        }

        //把文本节点加到当前标签中
        top.children.push(currentTextNode)
      }
      //追加文本到引用的对象上
      currentTextNode.content += token.content
    }
  }

  parse(template)

  //解析模板，入口
  function parse(template) {
    let state = data //状态机的初始状态为处理字符

    for (let c of template) {
      state = state(c) //每个状态机执行后都返回下一个状态机
    }
  }

  //字符处理状态机
  function data(c) {
    if (c === '/') {
      return tagOpen(c)
    } else {
      emit({
        type: 'text',
        content: c
      })
      return data
    }
  }

  //标签打开状态机
  function tagOpen(c) {
    if (c === '/') {
      currentToken.content += c //可能是注释，所以内容先存起来

      if (currentToken.content === '/') {
        return tagOpen //如果只有一个反斜杠，则等下一个反斜杠
      } else {
        return tagName //如果是两个反斜杠则开始处理标签名
      }
    }

    throw new Error('格式错误，' / '后面必须是' / '!')
  }

  //标签名处理状态机
  function tagName(c) {
    if (c.match(/^[\t ]$/)) { //处理空格，\t：tab\
      currentToken.content += c
      return tagName
    }
    if (c === '\n') {
      //标签解析结束，判断当前是注释还是真正的标签
      if (tagNames.includes(currentToken.tagName)) {
        //如果是标签，根据tagName设置type类型，如果tagName包含了start则是开始标签，end则为结束标签
        currentToken.type = currentToken.tagName.endsWith('start') ? 'startTag' : 'endTag'
        emit(currentToken)
      } else {
        //如果是注释，则将当前token的内容加到text节点里，并重置 token
        emit({
          type: 'text',
          content: currentToken.content += c
        })
        currentToken = {
          tagName: '',
          content: ''
        }
      }
      return data //处理完标签后继续处理数据
    } else {
      currentToken.tagName += c
      currentToken.content += c
      return tagName
    }
  }

  //根据标签名称获取代码
  function getCodeByTagName(root, tagName) {
    if (!root || !root.children) return ''

    let code = ''
    const textNodes = root.children.filter(item => item.type === 'text')
    for (let child of textNodes) {
      if (root.tagName === tagName) {
        let tmp = `${child.content.trimRight()}
`
        code += tmp
      }
    }

    code = code.substring(0, code.length - 1) //去掉最后的换行符

    const tagNodes = root.children.filter(item => item.type !== 'text')
    for (let child of tagNodes) {
      code += getCodeByTagName(child, tagName)
    }

    return code
  }

  let res = {
    front: getCodeByTagName(stack[0], FRONT_START),
    template: getCodeByTagName(stack[0], TEMPLATE_START),
    answer: getCodeByTagName(stack[0], ANSWER_START),
    back: getCodeByTagName(stack[0], BACK_START)
  }

  return res
}