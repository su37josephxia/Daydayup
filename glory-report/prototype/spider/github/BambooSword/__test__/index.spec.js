const spiderGithub = require('../index')

it('获取github首页中的掘金文章和B站视频', async () => {
  const { juejin_articles, bilibili_videos } = await spiderGithub(
    'https://github.com/BambooSword/BambooSword-FE-studybook'
  )
  expect(Array.isArray(juejin_articles)).toBe(true)
  expect(Array.isArray(bilibili_videos)).toBe(true)
  expect(
    juejin_articles.every(item => item.includes('https://juejin.cn/'))
  ).toBe(true)
  expect(
    bilibili_videos.every(item =>
      item.includes('https://www.bilibili.com/video')
    )
  ).toBe(true)
})
