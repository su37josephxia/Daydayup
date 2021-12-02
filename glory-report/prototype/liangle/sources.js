const source_type = require('../spider/common/source_type')

/**
 * 爬网数据源
 */

const getSources = function () {
  return [{
      source_id: 1,
      username: 'liangle8090',
      source_type: source_type.bilibili,
      url: 'https://space.bilibili.com/609653058'
    }, {
      source_id: 2,
      username: '前端-奔跑的蜗牛',
      source_type: source_type.bilibili,
      url: 'https://space.bilibili.com/1822108502'
    }, {
      source_id: 3,
      username: '无可匹敌的黑起',
      source_type: source_type.bilibili,
      url: 'https://space.bilibili.com/316534249'
    }, {
      source_id: 4,
      username: '味精王',
      source_type: source_type.bilibili,
      url: 'https://space.bilibili.com/69101216'
    }, {
      source_id: 5,
      username: '竹剑道',
      source_type: source_type.bilibili,
      url: 'https://space.bilibili.com/240041813'
    }, {
      source_id: 6,
      username: 'Django_D',
      source_type: source_type.bilibili,
      url: 'https://space.bilibili.com/378602575'
    }, {
      source_id: 7,
      username: 'rhythm022',
      source_type: source_type.bilibili,
      url: 'https://space.bilibili.com/19714331'
    }, {
      source_id: 8,
      username: '北斗落凡尘',
      source_type: source_type.bilibili,
      url: 'https://space.bilibili.com/476075392'
    }, {
      source_id: 9,
      username: 'jimixy',
      source_type: source_type.bilibili,
      url: 'https://space.bilibili.com/326179754'
    }, {
      source_id: 10,
      username: 'pandapls',
      source_type: source_type.bilibili,
      url: 'https://space.bilibili.com/405972403'
    }, {
      source_id: 11,
      username: '欧浪浪_',
      source_type: source_type.bilibili,
      url: 'https://space.bilibili.com/415236306'
    },


    // {
    //   source_id: 1,
    //   username: 'liangle',
    //   source_type: source_type.github,
    //   url: 'https://github.com/liangle/liangle-frontend-studybook'
    // }, {
    //   source_id: 3,
    //   username: 'liangle',
    //   source_type: source_type.juejin,
    //   url: 'https://juejin.cn/user/4354510940018567/posts'
    // }
    //... 其他用户
  ]
}

module.exports = getSources