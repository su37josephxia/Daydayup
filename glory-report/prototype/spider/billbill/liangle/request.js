const request = require("request");

async function getRequest(url) {
  return new Promise((resolve, reject) => {
    request({
        url,
        method: "GET",
        headers: { //设置请求头
          "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:94.0) Gecko/20100101 Firefox/94.0",
          "Cookie": "fingerprint=98528e38b2141f770da8a6e4e87201c2; buvid_fp=F29C57BE-7D95-F75C-0143-66F9947B38D804141infoc; buvid_fp_plain=F29C57BE-7D95-F75C-0143-66F9947B38D804141infoc; buvid3=FCBF455B-3ABE-42C3-A561-96F4BF590C10167631infoc; CURRENT_FNVAL=976; _uuid=9ADE95C5-0C2B-A367-4715-B03D0F627B4C04636infoc; blackside_state=1; sid=ky39dmmk; rpdid=|(J~kk|RRu)k0J'uYk~mYmu|Y; fingerprint=6eb96a833466e0fb2958fe834f633ce1; buvid_fp=F29C57BE-7D95-F75C-0143-66F9947B38D804141infoc; buvid_fp_plain=F29C57BE-7D95-F75C-0143-66F9947B38D804141infoc; SESSDATA=e0864ee5%2C1643521197%2C860dc%2A81; bili_jct=210c477fb4f8939d259c1da159b2d914; DedeUserID=237295541; DedeUserID__ckMd5=c8af4f7e0e0b2c42; PVID=1; CURRENT_QUALITY=80; LIVE_BUVID=AUTO6416342675647337; video_page_version=v_old_home; fingerprint3=bf2aa0464d5d9137c696f4955b11c534; fingerprint_s=bf902a5168710642d5638d1e6ced4629; bp_t_offset_237295541=596472044323076376; bp_video_offset_237295541=596472044323076376; innersign=1; bsource=share_source_weixinchat; CURRENT_BLACKGAP=1"
        },
        encoding: null
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

module.exports = getRequest;