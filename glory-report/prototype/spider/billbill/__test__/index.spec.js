const path = require('path')
describe("正常系", () => {
  test('视频页数据读取', async () => {
    const {getDetail} = require('../getDetail')
    const data = await getDetail('https://www.bilibili.com/video/BV1VS4y1R7n6')
    console.log('data',data)
  })
});