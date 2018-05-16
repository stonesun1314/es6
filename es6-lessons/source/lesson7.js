{
  // 参数的默认值,默认值后面不能有未赋默认值的变量
  function test (x, y = 'world') {
    console.log('默认值', x, y)
  }
  test('hello')
  test('hello', 'kill')
}

{
  let x = 'test'
  function test2 (x, y = x) {
    console.log('作用域', x, y)
  }
  test2('kill')
}
{
  let x = 'test'
  function test2 (c, y = x) {
    console.log('作用域', c, y)
  }
  test2('kill')
}

{
  // rest 在不确定有多少参数的时候，把参数转成一个数组，arg后不能有其它参数，只能放在参数末尾 离散的值=》数组
  function test3 (...arg) {
    for (const v in arg) {
      console.log('rest', v)
    }
  }
  test3(1, 2, 3, 4, 'a')
}
{
  // 扩展运算符 rest的逆运算 数组=》离散的值
  console.log(...[1, 2, 4])
}

{
  // 箭头函数,一定要注意绑定，在适合场景使用，不要乱用
  let arrow = v => v * 2 // 这是一个函数 arrow:函数名 v:参数() =>后面返回值
  let arrow2 = () => 5
  console.log('arrow', arrow(3))
  console.log('arrow', arrow2())
}

{
  // 尾调用,存在于函数式编程,函数的最后一句话是不是函数
  function tail (x) {
    console.log('tail', x)
  }
  function fx (x) {
    return tail(x)
  }
  fx(123)

  // 提升性能，例如递归
}
