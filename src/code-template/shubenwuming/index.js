const separate = function (template) {
  // 有效开合
  const FRONT_OPEN = '// 前置代码 start'
  const FRONT_CLOSE = '// 前置代码 end'
  const TEMPLATE_OPEN = '// 模板 start'
  const TEMPLATE_CLOSE = '// 模板 end'
  const ANSWER_OPEN = '// 答案 start'
  const ANSWER_CLOSE = '// 答案 end'
  const BACK_OPEN = '// 后置代码 start'
  const BACK_CLOSE = '// 后置代码 end'

  // 返回值
  const res = {
    front: [],
    answer: [],
    template: [],
    back: [],
    comment: [],
  }

  // 状态机
  const stateMachine = {
    currentState: 'front',
    transition(state) {
      this.currentState = state
    },
  }

  // 将模板切割成数组
  const strArr = template.split('\n').filter(item => item.trim() !== '')

  // 如果是有效开合则切换状态保存到comment，无效则说明是有效代码，保存到对应位置
  const save = function (token) {
    switch (token.trim()) {
      case FRONT_OPEN:
        stateMachine.transition('front')
        res['comment'].push(token)
        break
      case FRONT_CLOSE:
        stateMachine.transition('front')
        res['comment'].push(token)
        break
      case TEMPLATE_OPEN:
        stateMachine.transition('template')
        res['comment'].push(token)
        break
      case TEMPLATE_CLOSE:
        stateMachine.transition('template')
        res['comment'].push(token)
        break
      case ANSWER_OPEN:
        stateMachine.transition('answer')
        res['comment'].push(token)
        break
      case ANSWER_CLOSE:
        stateMachine.transition('template')
        res['comment'].push(token)
        break
      case BACK_OPEN:
        stateMachine.transition('back')
        res['comment'].push(token)
        break
      case BACK_CLOSE:
        stateMachine.transition('back')
        res['comment'].push(token)
        break
      default:
        res[stateMachine.currentState].push(token)
        break
    }
  }

  // 遍历模板
  for (let i = 0; i < strArr.length; i++) {
    // 保存到对应
    save(strArr[i])
  }

  // 转换成数组
  Object.keys(res).forEach(item => {
    res[item] = res[item].join("\n")
  })

  return res
}


module.exports = separate
