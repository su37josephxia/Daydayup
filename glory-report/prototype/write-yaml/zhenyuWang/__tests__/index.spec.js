const path = require('path')
describe("正常系", () => {
  test('读取yaml',() => {
    const {read} = require('../index.js'),
    res = read(path.join(__dirname,'../test.yml'));
    expect(res).toStrictEqual({ data: { name: 'zhangsan', age: 18 }})
  })

  test('写入yaml',() => {
    const {read,write} = require('../index.js'),
    filePath = path.join(__dirname,'../test.yml'),
    origin = read(filePath),
    res = write(filePath,'data.sex','M');
    let target = JSON.parse(JSON.stringify(origin))
    target.data.sex = 'M'
    expect(res).toStrictEqual(target)
    // 数据恢复
    write(filePath,'data',origin.data)
  })
});
describe("异常系", () => {
  test('读取yaml文件不存在',() => {
    const {read} = require('../index.js'),
    filePath = path.join(__dirname,'../abcd.yml'),
    error = read(filePath);
    // expect(error.errno).toBe(-4058)
    expect(error.code).toBe('ENOENT')
    expect(error.path).toBe(filePath)
  })

  test('写入属性值以 . [ 开头或结尾',() => {
    const {write} = require('../index.js'),
    filePath = path.join(__dirname,'../test.yml'),
    res = write(filePath,'.a.b.c','M');
    expect(res).toBe('attrs 不能以 . [ 开头或结尾')
  })

  test('属性值不合法',() => {
    const {write} = require('../index.js'),
    filePath = path.join(__dirname,'../test.yml'),
    res = write(filePath,'a.b——b.c','abc');
    expect(res).toBe('b——b 属性值不合法')
  })
});
