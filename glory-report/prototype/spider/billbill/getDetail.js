const request = require('request');
const { JSDOM } = require("jsdom");
const zlib = require('zlib');

// const url = 'https://www.bilibili.com/video/BV1VS4y1R7n6';

exports.getDetail = function (url) {
  return new Promise((resolve, reject) => {
    request({
      url, //请求路径
      method: "GET", //请求方式，默认为get
      headers: { //设置请求头
        "Host": "www.bilibili.com",
        "content-type": "application/json",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:94.0) Gecko/20100101 Firefox/94.0",
        "Cookie": "fingerprint=98528e38b2141f770da8a6e4e87201c2; buvid_fp=F29C57BE-7D95-F75C-0143-66F9947B38D804141infoc; buvid_fp_plain=F29C57BE-7D95-F75C-0143-66F9947B38D804141infoc; buvid3=FCBF455B-3ABE-42C3-A561-96F4BF590C10167631infoc; CURRENT_FNVAL=976; _uuid=9ADE95C5-0C2B-A367-4715-B03D0F627B4C04636infoc; blackside_state=1; sid=ky39dmmk; rpdid=|(J~kk|RRu)k0J'uYk~mYmu|Y; fingerprint=6eb96a833466e0fb2958fe834f633ce1; buvid_fp=F29C57BE-7D95-F75C-0143-66F9947B38D804141infoc; buvid_fp_plain=F29C57BE-7D95-F75C-0143-66F9947B38D804141infoc; SESSDATA=e0864ee5%2C1643521197%2C860dc%2A81; bili_jct=210c477fb4f8939d259c1da159b2d914; DedeUserID=237295541; DedeUserID__ckMd5=c8af4f7e0e0b2c42; PVID=1; CURRENT_QUALITY=0; LIVE_BUVID=AUTO6416342675647337; video_page_version=v_old_home_20; fingerprint3=bf2aa0464d5d9137c696f4955b11c534; fingerprint_s=bf902a5168710642d5638d1e6ced4629; bp_t_offset_237295541=594641391821987193; bp_video_offset_237295541=594643543602708166; innersign=1; bsource=share_source_weixinchat",
      },
      encoding: null
    }, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        zlib.gunzip(body, function (err, decoded) {
          if (decoded) {
            const detail = new JSDOM(decoded.toString(), {
              runScripts: "dangerously"
            }).window.__INITIAL_STATE__.videoData.stat;
            resolve(detail)
          } else {
            resolve({})
          }
        })
      } else {
        console.log(response.statusCode, error);
      }
    });
  })
}