module.exports = (code) => {
  const temp = code.split("\n");
  let map = new Map();
  map.set('front', [])
  map.set('template', [])
  map.set('answer', [])
  map.set('back', []);
  let msg = '';

  for (let i = 0; i < temp.length; i++) {
    if (temp[i].indexOf('前置代码 start') != -1) {
      msg = 'front';
      continue
    }
    if (temp[i].indexOf('模板 start') != -1) {
      msg = 'template';
      continue
    } else if (temp[i].indexOf('模板 end') != -1) {
      msg = '';
      continue
    }
    if (temp[i].indexOf('后置代码 start') != -1) {
      msg = 'back';
      continue
    } else if (temp[i].indexOf('后置代码 end') != -1) {
      msg = '';
      continue
    }
    if (temp[i].indexOf('前置代码 end') != -1 || temp[i].indexOf('模板 end') != -1 || temp[i].indexOf('后置代码 end') != -1) {
      msg = '';
      continue
    }
    if (msg != '') {
      map.set(msg, map.get(msg).concat(temp[i]))
    }
  }
  let tem = map.get('template');
  let ans = []
  msg = '';
  for (let i = 0; i < tem.length;) {
    if (tem[i].indexOf('答案 start') != -1) {
      tem.splice(i, 1)
      msg = 'answer';
      continue
    } else if (tem[i].indexOf('答案 end') != -1) {
      tem.splice(i, 1)
      msg = '';
      continue
    }
    if (msg == 'answer') {
      ans = ans.concat(tem[i])
      tem.splice(i, 1)
      continue
    }
    i++
  }
  map.set('answer', ans)
  map.set('template', tem)

  return {
    front: map.get('front').join('\n'),
    template: map.get('template').join('\n'),
    answer: map.get('answer').join('\n'),
    back: map.get('back').join('\n')
  }
}