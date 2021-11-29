const path = require('path');
const fs = require('fs')

async function createPage(detail) {
  // // 要写入的json数据

  // // 格式化json
  let text = JSON.stringify(detail, null, '\t')
  // 指定要创建的目录和文件名称 __dirname为执行当前js文件的目录
  let file = path.join(__dirname, 'test.json')
  //写入文件
  await fs.writeFile(file, text, async function (err) {
    if (err) {
      console.error(err);
    } else {
      await console.log('文件创建成功' + file);
    }
  })
}

module.exports = createPage