let StateMachine = require('javascript-state-machine')
// 构造函数
// let fsm = new StateMachine({
//   init: "red",
//   transitions: [{
//       name: 'through',
//       form: 'red',
//       to: 'green'
//     }, {
//       name: 'stop',
//       form: 'yellow',
//       to: 'red'
//     },
//     {
//       name: 'slow',
//       form: 'green',
//       to: 'yellow'
//     },
//   ],
//   data: {
//     username: '娃哈哈'
//   },
//   methods: {
//     onBeforeTransition() {
//       console.log(this.username);
//     },
//     onThrough() {
//       console.log(this.username);
//       return new Promise((res, rej) => {
//         setTimeout(() => {
//           console.log('现在可以通行了');
//           res()
//         }, 3000);
//       })
//     },
//     onSlow() {
//       console.log('现在需要慢行');
//     },
//     onStop() {
//       console.log('现在需要等待');
//     },
//     onPendingTransition() {
//       console.error('在状态完成期间不可以更改');
//     },
//   }
// })


// console.log('初始化状态=>', fsm.state);

// // 想要通行就需要红灯变绿

// fsm.through();
// fsm.can('stop') && fsm.stop()
// console.log('调用通行方法之后的状态=>', fsm.state);

// 工厂函数

let FSM = StateMachine.factory({
  init: "red",
  transitions: [{
      name: 'through',
      form: 'red',
      to: 'green'
    }, {
      name: 'stop',
      form: 'yellow',
      to: 'red'
    },
    {
      name: 'slow',
      form: 'green',
      to: 'yellow'
    },
  ],
  data() {
    return {
      username: '娃哈哈'
    }
  },
  methods: {
    onBeforeTransition() {
      console.log(this.username, 1);
    },
    onThrough() {
      console.log(this.username, 2);
      return new Promise((res, rej) => {
        setTimeout(() => {
          console.log('现在可以通行了');
          res()
        }, 3000);
      })
    },
    onSlow() {
      console.log('现在需要慢行');
    },
    onStop() {
      console.log('现在需要等待');
    },
    onPendingTransition() {
      console.error('在状态完成期间不可以更改');
    },
  }
})


let f1 = new FSM();
let f2 = new FSM();


f1.username = '喜之郎';
f1.through()