const getRequest = require('./request');


let pn = 1;
let ps = 25;
let count = 26;
let list = []
getList = async function (url) {

  let uid = getUid(url);
  while ((pn - 1) * ps < count) {
    await _get(uid);
    pn++
  }
  return list
}

async function _get(uid) {
  const url = `https://api.bilibili.com/x/space/arc/search?mid=${uid}&pn=${pn}&ps=${ps}&jsonp=jsonp`
  const body = await getRequest(url);
  return new Promise((resolve, reject) => {
    const data = JSON.parse(body).data
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
  // })

}



function getUid(url) {
  return url.substring(url.lastIndexOf('/') + 1)
}


module.exports = getList