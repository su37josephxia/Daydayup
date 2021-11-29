const getList = require('./getList.js')
const getDetail = require('./getDetail.js');
const createPage = require('./createPage.js');

async function getUpDetail(url) {
  return new Promise((resolve, reject) => {
    let detail = {}
    let list = [];
    let len = 1
    getList(url).then(async res => {
      let l = 1
      for await (const item of res) {
        const res1 = await getDetail(item.video)
        if (res1) {
          item.coin = res1.coin
          item.like = res1.like
          item.collect = res1.collect;
          item.view = res1.view;
          item.id = len
          len++
        }
      }
      detail = {
        author: res[0].author,
        list: res,
        total: res.length
      }
      // await createPage(detail)
      resolve(detail, 123)
    })
  })
}

module.exports = getUpDetail
// 输入所需要查找的UP主主页地址
// // let BiLiUrl = "https://space.bilibili.com/353539995";
// get(BiLiUrl)