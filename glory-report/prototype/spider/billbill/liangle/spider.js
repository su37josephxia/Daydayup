/**
 * 调用theseus写的功能
 */
const getUpDetail = require('./index')
const moment = require('moment')

const bilibiliSpider = function () {
  return {
    fetchData: async function (source) {
      return new Promise((resolve, reject) => {
        getUpDetail(source.url).then(res => {
          const rows = []
          res.list.forEach(item => {
            rows.push({
              title: item.title,
              url: item.video,
              like: item.like,
              view: item.view,
              created: moment(item.created).format('YYYY-MM-DD'),
              username: item.author,
              source_type: source.source_type
            })
          });

          resolve(rows)
        })
      })
    }
  }
}

module.exports = bilibiliSpider