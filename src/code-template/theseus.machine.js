let StateMachine = require('javascript-state-machine')

let map = new Map()
map.set('front', [])
map.set('template', [])
map.set('answer', [])
map.set('back', []);

let fsm = new StateMachine({
  init: '// 前置代码 start',
  transitions: [{
      name: 'front',
      from: '// 前置代码 start',
      to: '// 前置代码 end'
    },
    {
      name: 'fronted',
      from: '// 前置代码 end',
      to: '// 模板 start'
    },
    {
      name: 'template',
      from: '// 模板 start',
      to: '// 模板 end'
    },
    {
      name: 'templated',
      from: '// 模板 end',
      to: '// 后置代码 start'
    },
    {
      name: 'back',
      from: '// 后置代码 start',
      to: '// 后置代码 end'
    },
  ]
});


let fsm2 = new StateMachine({
  init: '// 答案 start',
  transitions: [{
      name: 'answer',
      from: '// 答案 start',
      to: '// 答案 end'
    },
    {
      name: 'answered',
      from: '// 答案 end',
      to: 'stop'
    }
  ]
})



module.exports = (code) => {
  const temp = code.split("\n");
  let state = ''
  temp.forEach(v => {
    if (v.indexOf(fsm.state) != -1 && fsm.transitions()[0]) {
      state = fsm.transitions()[0];
      fsm[state]()
    } else if (map.get(state) != undefined) {
      map.set(state, map.get(state).concat(v))
    }
  });
  let template = map.get('template');
  let tem = template;





  for (let i = 0; i < template.length;) {
    if (template[i].indexOf(fsm2.state) != -1 && fsm2.transitions()[0]) {
      state = fsm2.transitions()[0];
      console.log(state);
      fsm2[state]()
      tem.splice(i, 1)
    } else if (map.get(state) != undefined && state != 'stop') {
      map.set(state, map.get(state).concat(template[i]))
      tem.splice(i, 1)
    }
    i++
  }





  return {
    front: '',
    template: '',
    answer: '',
    back: ''
  }
}