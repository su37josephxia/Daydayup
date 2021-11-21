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
  const tagList = []
  //将代码字符串通过换行符分割为数组
  const stringArray = template.split('\n')
  function getIndexByStart(s) {
    for (let i = 0; i < codeList.length; i++) {
      if (codeList[i].indexOf(s) > -1) {
        return i
      }
    }
    return -1
  }
  //遍历分割后的数组
  let codeList = []
  const keyList = Object.keys(map)
  stringArray.forEach((string) => {
    //if (!string) return
    codeList.push(string)
    for (let i = 0; i < keyList.length; i++) {
      const key = keyList[i]
      const len = codeList.length
      const { end, start, code } = map[key]
      if (string.indexOf(end) > -1) {
        codeList.splice(len - 1, 1)
        const idx = getIndexByStart(start)
        const splice = codeList.splice(idx + 1, len)
        const next = getIndexByStart('start')
        if (next > -1) {
          code.push(...codeList.slice(next + 1))
        }
        codeList.splice(idx, 1)
        // 是否还有数据呢？
        code.push(...splice)
      }
    }
  })

  const templateResult = {}
  Object.keys(map).map((key) => {
    templateResult[key] = map[key].code.join('\n')
  })
  console.log('templateResult', templateResult.template)
  return templateResult
}

// const result = getTemplate(`
// // 前置代码 start
// var input = [1,3,2]
// // 前置代码 end
// // 模板 start
// function sort(arr) {
//     // 答案 start
//     var len = arr.length;
//     for (var i = 0; i < len - 1; i++) {
//         for (var j = 0; j < len - 1 - i; j++) {
//             if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
//                 var temp = arr[j+1];        // 元素交换
//                 arr[j+1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
// // 答案 end
//     return arr;
// }
// // 模板 end
// // 后置代码 start
// console.log(sort(input))
// // 后置代码 end
//     `)
// console.log('result', result)
module.exports = getTemplate
