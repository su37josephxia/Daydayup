/**
 * 拿Django的文件改造的
 */
const send = require('../../common/http');
const moment = require('moment')

getJuejinList = async function (source) {
  let pn = 0;
  let ps = 10;
  let count = 0;
  let list = []

  const params = {
    cursor: "0",
    sort_type: 2,
    "user_id": source.user_id
  }

  while ((pn - 1) * ps < count) {
    await _get(source);
    pn++
    params.cursor = `${pn * ps}`
  }

  async function _get(source) {
    const data = await send('https://api.juejin.cn/content_api/v1/article/query_list', "POST", params, false);
    return new Promise((resolve, reject) => {
      const vlist = data.data;
      if (vlist) {
        vlist.forEach(item => {
          list.unshift({
            author: source.username,
            title: item.article_info.title,
            description: item.article_info.brief_content,
            url: `https://juejin.cn/post/${item.article_id}`,
            created: new Date(item.article_info.ctime * 1000)
          })
        });
        count = data.count;
      }
      resolve(list)
    })
  }
  return list
}

const juejinSpider = function () {
  return {
    fetchData: async function (source) {
      return new Promise((resolve, reject) => {
        getJuejinList(source).then(res => {
          const rows = []
          res.forEach(item => {
            rows.push({
              title: item.title,
              url: item.url,
              created: moment(item.created).format('YYYY-MM-DD'),
              username: item.author,
              source_type: source.source_type
            })
          });

          resolve(rows)
        })
      })
    },
  }
}

module.exports = juejinSpider