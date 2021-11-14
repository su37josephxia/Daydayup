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
  const templateArr = template.split('\n')
  templateArr.forEach((item) => {
    for (let key in map) {
      if (item.indexOf(map[key].end) !== -1) {
        map[key].active = false
      } else if (map[key].active) {
        map[key].code.push(item)
      } else if (item.indexOf(map[key].start) !== -1) {
        map[key].active = true
      }
    }
  })
  map.template.code = map.template.code.filter((item) => {
    const arr = map.answer.code.concat([map.answer.start, map.answer.end])
    const result = arr.find((item2) => {
      return item.indexOf(item2) !== -1
    })
    return !result
  })
  return {
    front: map.front.code.join('\n'),
    template: map.template.code.join('\n'),
    answer: map.answer.code.join('\n'),
    back: map.back.code.join('\n'),
  }
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
