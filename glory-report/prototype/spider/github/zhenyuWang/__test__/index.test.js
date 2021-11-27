const getData = require("../index.js");
describe("获取github首页掘金文章及B站视频链接", () => {
  test('正常系',() => {
    const url = 'https://github.com/zhenyuWang/frontend-studybook';
    return getData(url).then(res => {
      const {articles,videos} = res;
      // 判断返回值类型
      expect(Array.isArray(articles)).toBe(true)
      expect(Array.isArray(videos)).toBe(true)
      // 判断数组中链接是否正确
      if(articles.length){
        expect(articles[0].startsWith('https://juejin.cn/post')).toBe(true)
      }
      if(videos.length){
        expect(videos[0].startsWith('https://www.bilibili.com/video')).toBe(true)
      }
    }).catch(err => {
      console.log('爬取GitHub首页失败',err)
    })
  })
})
