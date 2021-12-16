const juejinSpider = require('../spider/juejin/liangle/spider');
const githubSpider = require('../spider/github/liangle/spider');
const bilibiliSpider = require('../spider/billbill/liangle/spider');
const getSources = require('./sources')
const source_type = require('../spider/common/source_type')
const {
  write,
  deleteFile
} = require('./store')
const moment = require('moment');

/**
 * 爬网任务
 */
const spiderTask = function () {
  this.juejinSpider = new juejinSpider()
  this.githubSpider = new githubSpider()
  this.bilibiliSpider = new bilibiliSpider()
  this.sources = getSources()

  this.start = async function () {
    //把历史的数据清楚，全量更新
    const filename = `${moment(Date.now()).format('YYYY-MM-DD')}.json`
    const dataPath = `/data/${filename}`
    const scorePath = `/data/score.json`

    deleteFile(dataPath)
    deleteFile(scorePath)

    const that = this
    let count = 0
    let originData = []

    //设置内容源对应的爬虫
    const spiders = new Map(
      [
        [source_type.bilibili, that.bilibiliSpider], //B站
        [source_type.juejin, that.juejinSpider], //掘金
        [source_type.github, that.githubSpider] //github
      ]
    )

    //对每个内容源进行爬网
    this.sources.forEach(source => {
      const spider = spiders.get(source.source_type)
      spider.fetchData(source).then(res => {
        count++
        handleResult(res)
      })
    });

    //把每个请求回来的数据拼在一起
    const handleResult = (res) => {
      originData = originData.concat(res)

      if (count === this.sources.length) {
        write(originData, dataPath)
        write(that.genScore(originData), scorePath)
      }
    }
  }

  //生成分数数据
  this.genScore = function (originData) {
    //取出所有用户
    const usernames = []
    this.sources.forEach(item => {
      if (!usernames.includes(item.username)) usernames.push(item.username)
    })

    const scores = new Map()
    const total = {}
    let startTime = moment('2021-11-01') //开始统计时间
    let endTIme = Date.now() //结束时间

    //生成每天每人的初始分数
    while (startTime < endTIme) {
      const score = new Array()
      usernames.forEach(username => {
        score.push({
          username: username,
          score: 0
        })

        total[username] = 0
      })
      scores.set(moment(startTime).format('YYYY-MM-DD'), score)
      startTime = moment(startTime).add(1, 'day');
    }

    //把原始记录按时间排序
    originData.sort((a, b) => {
      return moment(a.created) - moment(b.created)
    })

    const socreMap = {
      'B站': 10,
      '掘金': 5,
      'GitHub': 1
    }
    //根据爬网记录更新每天分数
    originData.forEach(row => {
      const dateString = moment(row.created).format('YYYY-MM-DD')
      const arr = scores.get(dateString)

      if (arr) {
        arr.forEach(score => {
          if (score.username === row.username) {
            total[score.username] += socreMap[row.source_type]
          }

          score.score = total[score.username]
        })
      }
    })

    //修复数据，某天没人得分时，取前一天分数
    let res = {}
    let prev = []
    for (let [key, value] of scores) {
      if (value.filter((score) => score.score > 0).length === 0) {
        scores.set(key, prev)
      } else {
        prev = value
      }

      res[key] = scores.get(key)
    }

    return res
  }
}

//TODO:测试
const st = new spiderTask()
st.start()