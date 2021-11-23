let biliUrl = "https://space.bilibili.com/353539995";

const request = require('request');
const {
  getDetail
} = require('./getDetail')

let pn = 1;
let ps = 25;
let count = 26;
let list = []

exports.getList = async function (url) {
  let uid = getUid(url);
  while ((pn - 1) * ps < count) {
    await _get(uid);
    pn++
  }
  return list
}

function _get(uid) {
  return new Promise((resolve, reject) => {
    request({
      url: `https://api.bilibili.com/x/space/arc/search?mid=${uid}&pn=${pn}&ps=${ps}&jsonp=jsonp`,
      method: "GET",
    }, function (err, response, res) {
      const data = JSON.parse(res).data
      const vlist = data.list.vlist;
      vlist.forEach(item => {
        list.push({
          author: item.author,
          pic: item.pic,
          title: item.title,
          description: item.description,
          video: `https://www.bilibili.com/video/${item.bvid}`,
        })
      });
      count = data.page.count;
      resolve(list)
    })
  })

}

async function addDetail(item) {
  url = `https://www.bilibili.com/video/${item.vbid}`;
  await getDetail(url)
    .then(res => {
      item = {
        view: res.view,
        favorite: res.favorite,
        coin: res.coin,
        like: res.like,

      }
    })
}

function getUid(url) {
  return url.substring(url.lastIndexOf('/') + 1)
}


// `https://api.bilibili.com/pgc/season/episode/web/info?ep_id=426970`
// `https://api.bilibili.com/pgc/season/episode/web/info?ep_id=154741`