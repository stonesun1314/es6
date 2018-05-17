{
  // 简洁表达法
  let o = 1
  let k = 2
  let es5 = {
    o: o,
    k: k
  }
  let es6 = {o, k}
  let es5_method = {
    hello: function () {
      console.log('hello')
    }
  }
  let es6_method = {
    hello () {
      console.log('hello')
    }
  }
  es5_method.hello()
  es6_method.hello()
}
{
  // 属性表达式,es6 的方法能动态实现变量的依赖
  let a = 'b'
  let es5_obj = {
    a: 'c'
  }
  let es6_obj = {
    [a]: 'c'
  }
  console.log(es5_obj, es6_obj)
}

{
  // Obj中常用新增API
  console.log('字符串', Object.is('abc', 'abc')) // is 功能上 与 ===相同
  console.log('数组', Object.is([], []), [] === []) // 引用对象是地址

  console.log('拷贝', Object.assign({a: 'a'}, {b: 'b'})) // 浅拷贝，指针的复制

  let test = {k: 123, o: 456}
  for (let [key, value] of Object.entries(test)) {
    console.log([key, value])
  }
}

{
  // 扩展运算符
  let {a, b, ...c} = {a: 'test', b: 'kill', c: 'ddd', d: 'ccc'}
}
