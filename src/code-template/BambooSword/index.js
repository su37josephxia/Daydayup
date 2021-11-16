module.exports = template => {
  // 获取不同模板的栈信息
  const stack = []
  // 模板对应的hash表信息
  const hashMap = {
    front: {
      start: '// 前置代码 start',
      end: '// 前置代码 end',
      active: false,
      code: [],
    },
    template: {
      start: '// 模板 start',
      end: '// 模板 end',
      active: false,
      code: [],
    },
    answer: {
      start: '// 答案 start',
      end: '// 答案 end',
      active: false,
      code: [],
    },
    back: {
      start: '// 后置代码 start',
      end: '// 后置代码 end',
      active: false,
      code: [],
    },
  }
  // 获取每一行信息
  const templateArr = template.split('\n')
  templateArr.forEach(item => {
    // pushKey 是为了让推入和检测代码分开，因为map是没有先后顺序的，所以可能导致在有嵌套的内容中，检测代码被提前放入到内容中
    let pushKey
    for (let key in hashMap) {
      // 若检查到开始内容
      if (item.indexOf(hashMap[key].start) !== -1) {
        // 1. 进行入栈操作，把对应的hashmap 信息导入到栈内
        // 2. 把对应的状态设置为active, 其余模板状态设置为inactive
        pushKey = ''
        stack.push(hashMap[key])
        for (let key1 in hashMap) {
          hashMap[key1].active = key === key1
        }
      } else if (item.indexOf(hashMap[key].end) !== -1) {
        // 如果检查到 结束 模块
        // 检查是否符合栈顺序
        // 符合栈规律， 把当前 模板状态改为 inactive，同时查询栈中是否有内容，若有内容,把栈的末尾的模板状态设置为 activate
        // 若不符合堆栈规律，报错处理
        pushKey = ''
        const stackInfo = stack.pop()
        if (stackInfo?.end === hashMap[key].end) {
          hashMap[key].active = false
          let len = stack.length
          if (len) {
            stack[len - 1].active = true
          }
        } else {
          throw `You got an error`
        }
      } else if (hashMap[key].active) {
        pushKey = key
      }
    }
    if (pushKey) {
      // 若模板对应的状态为active, 需要把当前行内容推入到模板
      hashMap[pushKey].code.push(item)
    }
  })
  const { front, template: templateChunK, answer, back } = hashMap
  return {
    front: front.code.join('\n'),
    template: templateChunK.code.join('\n'),
    answer: answer.code.join('\n'),
    back: back.code.join('\n'),
  }
}
