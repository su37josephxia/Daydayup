const path = require('path');
const fs = require('fs')

const write = async function (rows, filename) {
  let text = JSON.stringify(rows, null, '\t')

  // 指定要创建的目录和文件名称 __dirname为执行当前js文件的目录
  let file = path.join(__dirname, filename)
  //写入文件
  await fs.writeFile(file, text, async function (err) {
    if (err) {
      console.error(err);
    } else {
      await console.log('文件创建成功' + file);
    }
  })
}

const deleteFile = function (filepath) {
  let file = path.join(__dirname, filepath)
  if (fs.existsSync(filepath)) {
    fs.unlink(file, async function (err) {
      if (err) {
        console.error(err);
      } else {
        await console.log('文件删除成功' + file);
      }
    })
  }
}


module.exports = {
  write,
  deleteFile
}