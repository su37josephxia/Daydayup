/**
 * 拿的zhenyuWang的代码
 */
const originRequest = require("request");
const {
  promisify
} = require("util");
const request = promisify(originRequest);
const cheerio = require("cheerio");
const source_type = require("../../common/source_type");

const githubSpider = function () {
  return {
    // 获取GitHub首页 掘金文章 B站视频链接
    fetchData: function (source) {
      return new Promise(async (resolve, reject) => {
        // 获取文档
        const {
          body
        } = await request(source.url);
        const $ = cheerio.load(body);
        // 获取 readme 主体内容中的 a标签
        const list = $('html>body>.application-main>div>main>div.new-discussion-timeline>div>div>div.Layout>div>readme-toc>div>div.Box-body>article').find('a'),
          answers = [];
        // 将对应链接放到对应数组
        list.map((i, el) => {
          const url = $(el).attr('href')
          if (url.startsWith('https://github.com') && url.endsWith('js')) {
            answers.push({
              url: url,
              username: source.username,
              source_type: source.source_type
            })
          }
        })
        resolve(answers)
      })
    }
  }
}

module.exports = githubSpider