var chokidar = require('chokidar')
var path = require('path')
var shell = require('shelljs')

// 创建监听实例，
var watcher = chokidar.watch('file, dir, glob, or array', {
  ignored: /[\/\\]\./,
  persistent: true,
})

const ext = ['.json']

// 绑定consolg
var log = console.log.bind(console)

//指定监听文件夹变化
watcher.add(['./github-db'])
// 监听文件夹
watcher
  .on('add', function (filePath) {
    //添加文件
  })
  .on('change', function (filePath) {
    // 修改文件
    // 获取后缀
    const extName = path.extname(filePath)

    //文件全名
    const baseName = path.basename(filePath)

    //获取文件名，不含后缀
    const fileName = baseName.substring(0, baseName.indexOf(extName))

    //校验是否符合日期字符串
    if (checkDateFormat(fileName)) {
      // 将文件提交到缓存
      if (gitAdd(filePath)) {
        // 添加git commit
        if (gitCommit('自动提交json')) {
          //提交代码
          gitPush()
        }
      }
    }
  })

// 将文件添加到git缓存
function gitAdd(baseName) {
  if (checkGit()) {
    const filePath = path.resolve(__dirname, baseName)
    const code = shell.exec(`git add ${filePath}`).code
    return code === 0
  }
  return false
}

// 添加git 备注
function gitCommit(commit) {
  if (checkGit()) {
    const code = shell.exec(`git commit -m ${commit}`).code
    return code === 0
  }
  return false
}

// 提交
function gitPush(master) {
  if (checkGit()) {
    //如果提交失败，再次提交
    var code = shell.exec(master || 'git push origin master').code
    if (code === 0) {
      shell.exit(1)
    } else {
      setTimeout(gitPush, 1000)
    }
  }
}

// 校验git是否可用
function checkGit() {
  if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git')
    shell.exit(1)
    return false
  }
  return true
}

// 校验字符串是否符合日期格式
function checkDateFormat(s) {
  let string = s
  if (
    /^\d{4}-\d{2}-\d{2}$/.test(s) ||
    /^\d{4}.\d{2}.\d{2}$/.test(s) ||
    /^\d{4}_\d{2}_\d{2}$/.test(s)
  ) {
    string = s.replace(/[._-]/g, '')
  }
  if (string.length === 8) {
    const year = string.substring(0, 4)
    const month = string.substring(4, 6)
    const day = string.substring(6, 8)
    const current = new Date(`${year}.${month}.${day}`)
    return !(current.toString() === 'Invalid Date')
  }
  return false
}
