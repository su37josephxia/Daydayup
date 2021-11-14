/**
 * 模版拆分
 */
const map = {
  front: {
    start: '// 前置代码 start',
    end: '// 前置代码 end',
    code: [],
  },
  template: {
    start: '// 模板 start',
    end: '// 模板 end',
    code: [],
  },
  answer: {
    start: '// 答案 start',
    end: '// 答案 end',
    code: [],
  },
  back: {
    start: '// 后置代码 start',
    end: '// 后置代码 end',
    code: [],
  },
}
function getTemplate(template) {
  //根据map中属性key创建状态值，key为true将代码放入map[key].code中
  const actionMap = Object.keys(map).map((k) => {
    const o = {}
    o[k] = false
    return o
  })
  //将代码字符串通过换行符分割为数组
  const stringArray = template.split('\n')

  //遍历分割后的数组
  stringArray.forEach((string) => {
    // 数组中字符串可能为空，可能是一段代码，可能是备注；
    Object.keys(map).forEach((key) => {
      // key为map中属性
      const { start, end, code } = map[key]
      //匹配到代码开始标识将状态值设置为true
      if (string.indexOf(start) > -1) {
        actionMap[key] = true
        //return ,这句代码不要
        return
      } else if (string.indexOf(end) > -1) {
        //匹配到代码开始标识将状态值设置为false
        actionMap[key] = false
      }
      // 状态值为true,将代码放入code中
      if (actionMap[key]) {
        code.push(string)
      }
    })
  })

  const templateResult = {}
  Object.keys(map).map((key) => {
    templateResult[key] = map[key].code.join('\n')
  })

  return templateResult
}

const result = getTemplate(`
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
    `)

console.log(result)
