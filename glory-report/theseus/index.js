const path = require('path');
const fs = require('fs')

let {
  getList
} = require('./getList.js')
let {
  getDetail
} = require('./getDetail.js');

let detail = {}
let list = [];
let len = 1
async function get(url) {
  getList(url).then(async res => {
    let l = 1
    for await (const item of res) {
      await getDetail(item.video).then(res1 => {
        if (res1) {
          item.coin = res1.coin
          item.like = res1.like
          item.view = res1.view;
          item.favorite = res1.favorite;
          item.id = len
          console.log(len);
          len++
        }
      })
    }
    detail = {
      author: res[0].author,
      list: res,
      total: res.length
    }
    createPage(detail)
  })
}

function createPage(detail) {
  // // 要写入的json数据

  // // 格式化json
  let text = JSON.stringify(detail, null, '\t')
  // 指定要创建的目录和文件名称 __dirname为执行当前js文件的目录
  let file = path.join(__dirname, 'test.json')
  //写入文件
  fs.writeFile(file, text, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log('文件创建成功' + file);
    }
  })
}


let BiLiUrl = "https://space.bilibili.com/353539995";
// 输入所需要查找的UP主主页地址
get(BiLiUrl)