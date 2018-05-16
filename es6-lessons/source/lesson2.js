// 解构赋值
{
  let a, b, rest;
  [a, b] = [1, 2]
  console.log(a, b)
}

// 数组的解构赋值
{
  let a, b, reset;
  [a, b, ...reset] = [1, 2, 3, 4, 5, 6]
  console.log(a, b, reset)
  console.log(reset)
}

// 对象的解构赋值
{
  let a, b;
  ({a, b} = {a: 1, b: 2})
  console.log(a, b)
}

// 数组、数组的解构赋值
{
  let a, b, c, reset;
  [a, b, c = 3] = [1, 2]
  console.log(a, b, c)
}

// 对象的交换，不需要第三方变量
{
  let a = 1
  let b = 2;
  [a, b] = [b, a]
  console.log(a, b)
}

// 不需要第三方的变量接收结果，在赋值。直接赋值即可
{
  function f () {
    return [1, 2]
  }

  let a, b;
  [a, b] = f()
  console.log(a, b)
}

// 选择性的接受部分变量***
{
  function f () {
    return [1, 2, 3, 4, 5]
  }
  let a, b, c
  [a,,,, b] = f()
  console.log(a, b)
}
// 数组解构的另一个场景****
{
  function f () {
    return [1, 2, 3, 4, 5]
  }
  let a, b, c
  [a, , ...b] = f()
  console.log(a, b)
}

{
  // 对象的结构赋值
  let a = {p: 42, q: true}
  let {p, q} = a
  console.log(p, q)
}
{
  let {a = 10, b = 5} = {a: 3}
  console.log(a, b)
}
{
  // 前端和服务端通信的json***
  let metaData = {
    title: 'abc',
    test: [{
      title: 'test',
      desc: 'description'
    }]
  }
  let {title: esTitle, test: [{title: cnTitle}]} = metaData
  console.log(esTitle)
}
