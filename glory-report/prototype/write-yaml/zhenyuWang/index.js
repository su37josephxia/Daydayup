const yaml = require('js-yaml')
const fs = require('fs')

/**
 * @param {filePath} filePath 要读取的yml文件路径
 * @return 读取文件的数据或者error
 */

function read(filePath){
  try {
    const data = yaml.load(fs.readFileSync(filePath));
    return data;
  } catch (e) {
    return e
  }
}

/**
 * 
 * @param {filePath} file 要写入的yml文件路径
 * @param {string} attrs 要写入的属性路径 a.b.c arr[0[0
 * 注意数组路径不需要写 ]
 * @param {any} data 要写入的对应属性的数据
 * @return {any} 返回写入数据后的文件数据或写入失败的error
 */
function write(filePath,attrs,data){
  let fileData = yaml.load(fs.readFileSync(filePath));
  // 如果属性路径不为空
  if(attrs){
    // 要赋值的数据
    targetData = fileData,
    // 每个属性值
    attr = '';
    // 路径以 . [ 开头或结尾返回错误信息
    if(
      attrs.startsWith('.')||
      attrs.endsWith('.')||
      attrs.startsWith('[')||
      attrs.endsWith('[')
    ){
      return 'attrs 不能以 . [ 开头或结尾'
    }
    // 获取要赋值的数据
    // 如果途中某个属性值不合法,返回错误信息
    const pattern = /^\w{1,}$/;
    for(let i = 0;i<attrs.length;i++){
      if(attrs[i] === '.'){
        if(!pattern.test(attr)) return `${attr} 属性值不合法`
        if(targetData[attr]===undefined) targetData[attr] = {};
        targetData = targetData[attr]
        attr = '';
      }else if(attrs[i] === '['){
        if(!pattern.test(attr)) return `${attr} 属性值不合法`
        if(targetData[attr]===undefined) targetData[attr] = [];
        targetData = targetData[attr]
        attr = '';
      }else{
        attr += attrs[i]
      }
    }
    if(!pattern.test(attr)) return `${attr} 属性值不合法`
    targetData[attr] = data;
  }
  
  // 写入最新数据
  try {
    fs.writeFileSync(filePath, yaml.dump(fileData));
    return fileData;
  }catch(err){
    return err;
  }
}

module.exports = {read,write}