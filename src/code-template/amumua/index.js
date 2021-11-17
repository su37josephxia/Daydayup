// 先定义好标识常量， 待会儿根据标识进行分割
const flagMap = new Map();
flagMap.set("// 前置代码", "");
flagMap.set("// 模板", "");
flagMap.set("// 答案", "");
flagMap.set("// 后置代码", "");

const startFlag = "start";
const endFlag = "end";

let errorCode = 500;

let prev = ""; // 记录前缀
let stack = []; // 跟匹配的括号一样，先进后出
let flagStack = []; // 记录当前存的是哪个标识， 使用数组为了支持多层嵌套

/**
 * @description 代码模板分离
 * @author amumua
 * @date 2021-11-16
 */
function parse(code) {
    
    splitString(code);

    let result =  {
        front: flagMap.get("// 前置代码"),
        template: flagMap.get("// 模板"),
        answer: flagMap.get("// 答案"),
        back: flagMap.get("// 后置代码"),
    }

    return result;
}

/**
 * @description 对代码进行分离 -- 一次遍历
 * @author amumua
 * @date 2021-11-16
 */
function splitString(code) {
    const n = code.length;

    for (let i = 0; i < n; i++) {
        const len = prev.length;

        if (flagMap.has(prev.slice(len - 5)) || flagMap.has(prev.slice(len - 7))) {
            recordString(flagMap.has(prev.slice(len - 5)) ? 5 : 7);
            continue;
        }

        prev += code[i];
    }

    flagStack.length && stack.push(flagStack[flagStack.length - 1] + " " + prev);
    formatResult();
}

/**
 * @description 记录员，待会儿一一取出
 * @author amumua
 * @date 2021-11-16
 */
function recordString(number) {
    flagStack.length && stack.push(flagStack[flagStack.length - 1] + " " + prev.slice(0, prev.length - number));
    flagStack.push(prev.slice(prev.length - number));
    prev = "";
}

/**
 * @description 格式化结果
 * @author amumua
 * @date 2021-11-16
 */
function formatResult() {
    for (let i = 0; i < stack.length; i++) {
        let str = stack[i];

        if (str.slice(flagStack[i].length + 1 , flagStack[i].length + 6) === startFlag) {
            flagMap.set((flagStack[i] + " " + startFlag), i);
        } else if (str.slice(flagStack[i].length + 1 , flagStack[i].length + 4) === endFlag) {
            if (flagMap.has(flagStack[i] + " " + startFlag)) {
                let prevIndex = flagMap.get(flagStack[i] + " " + startFlag);
                // 判断是否嵌套
                if (i - prevIndex === 1) {
                    replaceString(stack[prevIndex], flagStack[prevIndex]);
                } else {
                    // 如果需要嵌套数据可以用这段代码
                    // let prevStr = "";
                    // for (let k = prevIndex; k < i; k++) {
                    //     prevStr += stack[k];
                    // }
                    let prevStr = stack[prevIndex];
                    replaceString(prevStr, flagStack[prevIndex], i - 1);
                }
            } else {
                errorCode = 501;
                return errorHandler(stack[i] + "end之前未能找到start部分");
            }
        } else {
            errorCode = 502;
            return errorHandler(stack[i] + "后面没有加开始结束标识");
        }
    }
}

/**
 * @description 替换字符串, 可以对\n换行符做统一处理，如果需要的话
 * @author amumua
 * @date 2021-11-17
 */
function replaceString(str, flag, index) {
    str = trimString(str, flag + " " + startFlag + "\n");
    // 嵌套的需要考虑是否有残留
    if (index) {
        let endStr = trimString(stack[index], flagStack[index] + " " + endFlag + "\n") ;
        str += "\n" + endStr;
    }

    flagMap.set(flag , str); 
}

/**
 * @description 去除空字符串
 * @author amumua
 * @date 2021-11-17
 */
function trimString(str, flag) {
    str = str.replace(flag, "");
    if (str.slice(0, 2) === "\n") {
        str = str.slice(2);
    }

    // 删除空字符串
    while(str[0] === "") {
        str = str.slice(1);
    }

    return str;
}

/**
 * @description 异常处理
 * @author amumua
 * @date 2021-11-16
 */
function errorHandler(errorMessage) {
    // 有需要可以分别处理错误码， 这边只做占位
    switch (errorCode) {
        case 501:
        case 502:
        default:
            console.log(errorMessage);
            break;
    }
}

module.exports = parse;