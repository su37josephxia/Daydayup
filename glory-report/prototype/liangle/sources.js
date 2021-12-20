const source_type = require('../spider/common/source_type')

/**
 * 爬网数据源
 */

const getSources = function () {
  return [
    /********************************** B站开始 ********************************/
    {
      username: 'liangle8090',
      source_type: source_type.bilibili,
      url: 'https://space.bilibili.com/609653058'
    }, {
      username: '前端-奔跑的蜗牛',
      source_type: source_type.bilibili,
      url: 'https://space.bilibili.com/1822108502'
    }, {
      username: '无可匹敌的黑起',
      source_type: source_type.bilibili,
      url: 'https://space.bilibili.com/316534249'
    }, {
      username: '味精王',
      source_type: source_type.bilibili,
      url: 'https://space.bilibili.com/69101216'
    }, {
      username: '竹剑道',
      source_type: source_type.bilibili,
      url: 'https://space.bilibili.com/240041813'
    }, {
      username: 'Django_D',
      source_type: source_type.bilibili,
      url: 'https://space.bilibili.com/378602575'
    }, {
      username: 'rhythm022',
      source_type: source_type.bilibili,
      url: 'https://space.bilibili.com/19714331'
    }, {
      username: '北斗落凡尘',
      source_type: source_type.bilibili,
      url: 'https://space.bilibili.com/476075392'
    }, {
      username: 'jimixy',
      source_type: source_type.bilibili,
      url: 'https://space.bilibili.com/326179754'
    }, {
      username: 'pandapls',
      source_type: source_type.bilibili,
      url: 'https://space.bilibili.com/405972403'
    }, {
      username: '欧浪浪_',
      source_type: source_type.bilibili,
      url: 'https://space.bilibili.com/415236306'
    },
    /********************************** B站结束 ********************************/
    /********************************** 掘金开始 ********************************/
    {
      username: 'liangle8090',
      source_type: source_type.juejin,
      user_id: "4354510940018567"
    }, {
      username: '前端-奔跑的蜗牛',
      source_type: source_type.juejin,
      user_id: "4212984285249245"
    }, {
      username: '猎豹',
      source_type: source_type.juejin,
      user_id: "289926803112232"
    }, {
      username: '味精王',
      source_type: source_type.juejin,
      user_id: "588993964542494"
    }, {
      username: '进击的阿木木',
      source_type: source_type.juejin,
      user_id: "1645307495460973"
    }, {
      username: '活捉一只小星星',
      source_type: source_type.juejin,
      user_id: "78820569261992"
    }, {
      username: '无可匹敌的黑起',
      source_type: source_type.juejin,
      user_id: "870468940477240"
    }, {
      username: '竹剑',
      source_type: source_type.juejin,
      user_id: "2735240659342136"
    }, {
      username: '北斗落凡尘',
      source_type: source_type.juejin,
      user_id: "4177799915777389"
    }
    /********************************** 掘金结束 ********************************/


    //   username: 'liangle',
    //   source_type: source_type.juejin,
    //   url: 'https://juejin.cn/user/4354510940018567/posts'
    // }
    //... 其他用户
  ]
}

module.exports = getSources