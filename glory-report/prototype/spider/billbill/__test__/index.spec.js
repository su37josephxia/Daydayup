describe("正常系", () => {
  test('获取UP主所有视频信息', async () => {
    const getUpDetail = require('../index')
    const data = await getUpDetail('https://space.bilibili.com/1334519689')
    console.log('data', data)
    expect(typeof data == "object").toBe(true);
  }, 10000)
  test('获取视频点赞，浏览，投币，收藏', async () => {
    const getDetail = require('../getDetail')
    const detail = await getDetail('https://www.bilibili.com/video/BV1Yq4y1g7vQ')
    console.log('coin', detail.coin)
    console.log('like', detail.like)
    console.log('collect', detail.collect)
    console.log('view', detail.view)
    expect(typeof detail.coin == "string" || 'number').toBe(true);
    expect(typeof detail.like == "string" || "number").toBe(true);
    expect(typeof detail.collect == "string" || "number").toBe(true);
    expect(typeof detail.view == "string" || "number").toBe(true);
  })
});