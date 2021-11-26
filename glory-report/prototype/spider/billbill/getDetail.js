const cheerio = require("cheerio");
const getRequest = require("./request");
const zlib = require('zlib');

let like = null;
let coin = null;
let collect = null;
let view = null;

async function getDetail(url) {
  const body = await getRequest(url);
  return new Promise((resolve, reject) => {
    zlib.gunzip(body, function (err, decoded) {
      if (decoded) {
        const $ = cheerio.load(decoded);
        if ($('.view')[0].attribs.title) {
          view = $('.view')[0].attribs.title.replace(/[^0-9]/g, "")
        } else {
          let data = $('.view')[0].children[0].data;
          view = data.substring(0, data.length - 5)
        }
        $('.ops').each((i, list) => {
          list.children.map((item) => {
            if (item.data != '' && item.name == 'span') {
              let attr = item.attribs
              switch (attr.class) {
                case 'like':
                  like = $(item).text().trim() == "点赞" ? 0 : $(item).text().trim()
                  break;
                case 'coin':
                  coin = $(item).text().trim() == "投币" ? 0 : $(item).text().trim()
                  break;
                case 'collect':
                  collect = $(item).text().trim() == "收藏" ? 0 : $(item).text().trim()
                  break;
              }
            }
          })
          resolve({
            view,
            like,
            coin,
            collect
          })
        })
      } else {
        resolve({})
      }
    })
  })
}
module.exports = getDetail;

// const url = "https://www.bilibili.com/video/BV1VS4y1R7n6"
// getDetail(url)