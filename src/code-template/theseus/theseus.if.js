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



  let frontArr = map.get('front');
  let front = ''
  for (let i = 0; i < frontArr.length; i++) {
    front = front + frontArr[i] + '\n'
  }
  let tempArr = map.get('template');
  let template = ''
  for (let i = 0; i < tempArr.length; i++) {
    template = template + tempArr[i] + '\n'
  }
  let ansArr = map.get('answer');
  let answer = ''
  for (let i = 0; i < ansArr.length; i++) {
    answer = answer + ansArr[i] + '\n'
  }
  let backArr = map.get('back');
  let back = ''
  for (let i = 0; i < backArr.length; i++) {
    back = back + backArr[i] + '\n'
  }



  return {
    front,
    template,
    answer,
    back
  }
}