const https = require('https');
const request = require('request');
const JSDOM = require('jsdom').JSDOM;
const zlib = require('zlib');

let biliUrl = "https://api.bilibili.com/x/space/arc/search?mid=1334519689&pn=1&ps=25&index=1&jsonp=jsonp";

https.get(biliUrl, (res) => {
  let data = ''; //接口数据

  res.on('data', (chunk) => {
    data += chunk; //拼接数据块
  });
  res.on('end', function () {
    let json = JSON.parse(data); //解析json
    // console.log(json.data.list.vlist.length); //打印json
    setData(json.data.list.vlist)
  })
}).on('error', () =>
  console.log('获取数据出错!')
);

function setData(list) {
  let data = {
    list: []
  };
  if (list.length > 0) {
    list.forEach(item => {
      data.list.push({
        title: item.title,
        bvid: item.bvid
      })
    });
  }
  console.log(data);
}

// request({
//   url: `https://www.bilibili.com/video/BV1Vf4y1K7im`, //请求路径
//   method: "GET", //请求方式，默认为get
//   headers: { //设置请求头
//     "content-type": "application/json",
//     "User-Agent": "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36",
//   },
// }, function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     zlib.gunzip(body, function (err, decoded) {
//       const start = new JSDOM(decoded.toString(), {
//         runScripts: "dangerously"
//       }).window.__INITIAL_STATE__.videoData.stat;
//       console.log(start);
//     })
//   }
// });