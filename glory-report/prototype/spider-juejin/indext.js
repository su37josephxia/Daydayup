const cheerio = require("cheerio");
const request = require("request");

async function startSpider(url) {
  const body = await send(url, "GET", {}, false);
  const $ = cheerio.load(body);
  // 观看数
  let view_count = 0;
  // 点赞数
  let digg_count = 0;
  $("script").map((i, el) => {
    if (!el.attribs.src) {
      let text = $(el)[0].children[0] ? $(el)[0].children[0].data : "";
      text = text.replace(/window/g, "global");
      eval(text);
      if (global.__NUXT__) {
        view_count =
          global.__NUXT__.state.view.column.entry.article_info.view_count;
        digg_count =
          global.__NUXT__.state.view.column.entry.article_info.digg_count;
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

(async function (url) {
  const { view_count, digg_count } = await startSpider(url);
  console.log("观看数：", view_count);
  console.log("点赞数：", digg_count);
})("https://juejin.cn/post/7005958508617138207");
