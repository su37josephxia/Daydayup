const originRequest = require("request");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");
const { promisify } = require("util");
const request = promisify(originRequest);

async function getData(url) {
  //juejin.cn/post/6989541212105981966
  // const url = `https://www.dy2018.com/i/${i}.html`;
  // request(url, function (err, res, body) {
  //     const html = iconv.decode(body, "gb2312");
  //     const $ = cheerio.load(html);
  //     console.log($(".title_all h1").text());
  // });
  https: console.log(url);
  const { body } = await request(url);
  // console.log("bbb", body);
  const test = `
  <body>
  <div class="inner">123</div>

  <script>
    $('.inner').append("<script>alert('append执行script')")
  </script>
</body>

  
  `


  const $ = cheerio.load(body);

  // $('script').map(function(i, el) { 
  //   // 建议这里打印$(this) 因为this的对象可能不同
  //   //因为存在script标签为空的数据， 所以判断children长度是否大于0
  //   console.log("ffffffffff", $(this)[0].children[0])
  //   //如果要获取script标签的属性， 例如 type 
  //   console.log($(this)[0].attribs['type'])
  $("script").map((i,el) => {
    console.log($(el)[0].children[0].data)

  });



  // console.log($("view_count").text());
  return "";
}

process.nextTick(async () => {
  await getData("https://juejin.cn/post/6989541212105981966");
    // await getData('https://www.bilibili.com/video/BV1Df4y1n777/')
  
});
