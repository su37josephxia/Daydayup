const cheerio = require("cheerio");
const request = require("request");

async function startSpider(url) {
  const body = await send(url, "GET", {}, false);
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
        view_count =
          proxy.__NUXT__.state.view.column.entry.article_info.view_count;
        digg_count =
          proxy.__NUXT__.state.view.column.entry.article_info.digg_count;
      }
    }
  });

  return { view_count, digg_count };
}

async function send(url, method, formData = {}, json = true) {
  return new Promise((resolve, reject) => {
    request(
      {
        url,
        method,
        json,
        formData,
      },
      async (error, _, body) => {
        if (!error) {
          resolve(body);
        } else {
          reject(error);
        }
      }
    );
  });
}

module.exports = startSpider;
