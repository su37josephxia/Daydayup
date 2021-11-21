describe("代码模板分离", () => {
  test('正常系',() => {
    const code = `
    // 前置代码 start
    var input = [1,3,2]
    // 前置代码 end
    // 模板 start
    function sort(arr) {
        // 答案 start
        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                    var temp = arr[j+1];        // 元素交换
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        // 答案 end
        return arr;
    }
    // 模板 end
    // 后置代码 start
    console.log(sort(input))
    // 后置代码 end



        `;

    const parse = require('../index')
    const {front, answer, template, back} = parse(code)
    expect(front).toBe(`    var input = [1,3,2]
`)
    expect(answer).toBe( `        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                    var temp = arr[j+1];        // 元素交换
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
`)
    expect(template).toBe(`    function sort(arr) {
        return arr;
    }
`)
    expect(back).toBe(`    console.log(sort(input))
`)
  });

  // TODO: 异常系 所有违反规定的依赖抛error
  test('should throw templateStr error, when not found: templateStr',() => {
    const code = `
   
    // 前置代码 start
    var input = [1,3,2]
    // 前置代码 end



    // 模板 start
    // 模板 end




    
    // 后置代码 start
    console.log(sort(input))
    // 后置代码 end
        `;
    const parse = require('../index')
     
    expect(()=>{
        parse(code)
    }).toThrowError(new Error('templateStr error'))
    
  });
  test('should throw frontStr error, when not found: frontStr',() => {
    const code = `
    // 前置代码 start
    // 前置代码 end
    // 模板 start
    function sort(arr) {
        // 答案 start
        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                    var temp = arr[j+1];        // 元素交换
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        // 答案 end
        return arr;
    }
    // 模板 end
    // 后置代码 start
    console.log(sort(input))
    // 后置代码 end



        `;
    const parse = require('../index')

    expect(()=>{
        parse(code)
    }).toThrowError(new Error('frontStr error'))
    
  });
  test('should throw backStr error, when not found: backStr',() => {
    const code = `
    // 前置代码 start
    var input = [1,3,2]
    // 前置代码 end
    // 模板 start
    function sort(arr) {
        // 答案 start
        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                    var temp = arr[j+1];        // 元素交换
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        // 答案 end
        return arr;
    }
    // 模板 end
    // 后置代码 start
    // 后置代码 end



        `;
    const parse = require('../index')
    
    expect(()=>{
        parse(code)
    }).toThrowError(new Error('backStr error'))
    
  });
  test('should throw beforeFrontStart error, when not found:// 前置代码 start',() => {
    const code = `
   

    var input = [1,3,2]
    // 前置代码 end



    // 模板 start
    function sort(arr) {
        // 答案 start
        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                    var temp = arr[j+1];        // 元素交换
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        // 答案 end
        return arr;
    }
    // 模板 end




    
    // 后置代码 start
    console.log(sort(input))
    // 后置代码 end
        `;
    const parse = require('../index')

    expect(()=>{
        parse(code)
    }).toThrowError(new Error('beforeFrontStart error'))
    
  });
  test('should throw frontStart error, when not found:// 前置代码 end',() => {
    const code = `
   

    // 前置代码 start
    var input = [1,3,2]



    // 模板 start
    function sort(arr) {
        // 答案 start
        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                    var temp = arr[j+1];        // 元素交换
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        // 答案 end
        return arr;
    }
    // 模板 end




    
    // 后置代码 start
    console.log(sort(input))
    // 后置代码 end
        `;
    const parse = require('../index')

    expect(()=>{
        parse(code)
    }).toThrowError(new Error('frontStart error'))
    
  });

  test('should throw beforeTemplateStart error, when not found:// 模板 start',() => {
    const code = `
   

    // 前置代码 start
    var input = [1,3,2]
    // 前置代码 end



    
    function sort(arr) {
        // 答案 start
        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                    var temp = arr[j+1];        // 元素交换
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        // 答案 end
        return arr;
    }
    // 模板 end




    
    // 后置代码 start
    console.log(sort(input))
    // 后置代码 end
        `;
    const parse = require('../index')

    expect(()=>{
        parse(code)
    }).toThrowError(new Error('beforeTemplateStart error'))
    
  });

  test('should throw answerStart error, when not found:// 答案 end',() => {
    const code = `
   

    // 前置代码 start
    var input = [1,3,2]
    // 前置代码 end



    // 模板 start
    function sort(arr) {
        // 答案 start
        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                    var temp = arr[j+1];        // 元素交换
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        
        return arr;
    }
    // 模板 end




    
    // 后置代码 start
    console.log(sort(input))
    // 后置代码 end
        `;
    const parse = require('../index')

    expect(()=>{
        parse(code)
    }).toThrowError(new Error('answerStart error'))
    
  });

  test('should throw templateStart error, when not found:// 模板 end',() => {
    const code = `
   

    // 前置代码 start
    var input = [1,3,2]
    // 前置代码 end



    // 模板 start
    function sort(arr) {
        // 答案 start
        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                    var temp = arr[j+1];        // 元素交换
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        // 答案 end
        return arr;
    }
    




    
    // 后置代码 start
    console.log(sort(input))
    // 后置代码 end
        `;
    const parse = require('../index')

    expect(()=>{
        parse(code)
    }).toThrowError(new Error('templateStart error'))
    
  });

  test('should throw beforeBackStart error, when not found:// 后置代码 start',() => {
    const code = `
   

    // 前置代码 start
    var input = [1,3,2]
    // 前置代码 end



    // 模板 start
    function sort(arr) {
        // 答案 start
        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                    var temp = arr[j+1];        // 元素交换
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        // 答案 end
        return arr;
    }
    // 模板 end




    
    
    console.log(sort(input))
    // 后置代码 end
        `;
    const parse = require('../index')

    expect(()=>{
        parse(code)
    }).toThrowError(new Error('beforeBackStart error'))
    
  });

  test('should throw End error, when not found:// 后置代码 end',() => {
    const code = `
   


    // 前置代码 start
    var input = [1,3,2]
    // 前置代码 end



    // 模板 start
    function sort(arr) {
        // 答案 start
        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                    var temp = arr[j+1];        // 元素交换
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        // 答案 end
        return arr;
    }
    // 模板 end




    
    // 后置代码 start
    console.log(sort(input))
        `;

    const parse = require('../index')

    expect(()=>{
        parse(code)
    }).toThrowError(new Error('End error'))
    
  });

  
  


});
