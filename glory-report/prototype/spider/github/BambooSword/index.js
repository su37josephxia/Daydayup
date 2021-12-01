const cheerio = require('cheerio')
const request = require('request')

async function spider(url) {
  const body = await getRequest(url)
  const $ = cheerio.load(body)
  // 获取掘金和B站视频链接
  const juejin_articles = []
  const bilibili_videos = []
  $('#readme .markdown-body a')
    .filter((i, el) => el.attribs.href.includes('https://juejin.cn/post'))
    .map((i, el) => {
      juejin_articles.push(el.attribs.href)
    })
  $('#readme .markdown-body a')
    .filter((i, el) =>
      el.attribs.href.includes('https://www.bilibili.com/video')
    )
    .map((i, el) => {
      bilibili_videos.push(el.attribs.href)
    })
  return { juejin_articles, bilibili_videos }
}
async function getRequest(url) {
  return new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
      if (!error) {
        resolve(body)
      } else {
        reject(error)
      }
    })
  }).catch(error => {
    console.error('you got an error when getting Request')
    return error
  })
}
spider('https://github.com/BambooSword/BambooSword-FE-studybook')
module.exports = spider
