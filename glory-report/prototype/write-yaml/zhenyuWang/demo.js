const {read,write}  = require('./index.js')
// 读取数据
const origin = read('./test.yml')
console.log('read',origin)
// 写入数据
console.log(write('./test.yml','data.a.b','abc'))
// 恢复数据
write('./test.yml','data',origin.data)