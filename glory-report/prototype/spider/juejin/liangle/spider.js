/**
 * 拿Django的文件改造的
 */
const cheerio = require("cheerio");
const send = require('../../common/http');

const juejinSpider = function () {
  return {
    fetchData: async function (source) {
      const body = await send(source.url, "GET", {}, false);
      const $ = cheerio.load(body);
      // 观看数
      let view_count;
      // 点赞数
      let digg_count;
      $("script").map((i, el) => {
        if (!el.attribs.src) {
          let text = $(el)[0].children[0] ? $(el)[0].children[0].data : "";
          // 避免污染全局
          text = `const proxy = arguments[0]; (function(window){${text}})(proxy)`;
          // 代理 window
          let proxy = {};
          const newFunction = new Function(text);
          newFunction(proxy);
          if (proxy.__NUXT__) {
            const entry = proxy.__NUXT__.state.view.column.entry
            if (entry.article_info) {
              view_count = entry.article_info.view_count;
              digg_count = entry.article_info.digg_count;
            }
          }
        }
      });

      return {
        view_count,
        digg_count
      };
    },
  }
}

module.exports = juejinSpider