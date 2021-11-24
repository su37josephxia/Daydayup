const spiderJuejin = require("../indext");

it("获取掘金观看数，点赞数", async () => {
  const { view_count, digg_count } = await spiderJuejin(
    "https://juejin.cn/post/7005958508617138207"
  );
  console.log("观看数：", view_count);
  console.log("点赞数：", digg_count);
  expect(typeof view_count === "number").toBe(true);
  expect(typeof digg_count === "number").toBe(true);
});
