const getList = require('./getList.js')

async function getUpDetail(url) {
  return new Promise((resolve, reject) => {
    let detail = {}
    getList(url).then(async res => {
      detail = {
        author: res.length > 0 ? res[0].author : '',
        list: res,
        total: res.length
      }
      resolve(detail, 123)
    })
  })
}

module.exports = getUpDetail