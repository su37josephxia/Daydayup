const FRONT_START = '// 前置代码 start',
  FRONT_END = '// 前置代码 end',
  TEMP_START = '// 模板 start',
  TEMP_END = '// 模板 end',
  ANS_START = '// 答案 start',
  ANS_END = '// 答案 end',
  BACK_START = '// 后置代码 start',
  BACK_END = '// 后置代码 end'
const change = [FRONT_START, TEMP_START, ANS_START, BACK_START, FRONT_END, TEMP_END, ANS_END, BACK_END]
// 更改状态
const changeState = (str) => {
  str = str.trim()
  switch (str) {
    case FRONT_START:
      return 'front'
    case TEMP_START:
    case ANS_END:
      return 'template'
    case ANS_START:
      return 'answer'
    case BACK_START:
      return 'back'
    case FRONT_END:
    case TEMP_END:
    case BACK_END:
      return -1
  }
}
// 是否需要更新状态
const needChange = (str) => {
  str = str.trim()
  return change.indexOf(str) > -1
}
// 是否正在运行中
const isRunning = (state) => (typeof state) === 'string'

module.exports = (code) => {
  // 状态
  let state = -1 //-1为非运行状态

  // 根据换行符分割字符串
  const origin = code.split(/[\r\n]+/)

  // 测试结果字符串对象
  const splitStr = {
    front: '',
    answer: '',
    template: '',
    back: '',
  }

  // 逐行扫描
  origin.forEach(str => {
    if (needChange(str)) { // 需要更新状态
      state = changeState(str, change)
    } else if (isRunning(state)) { // 拼接字符串
      splitStr[state] += splitStr[state] ? `\n${str}` : str
    }
  })

  return splitStr
}