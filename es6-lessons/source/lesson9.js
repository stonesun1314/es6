{
  // 声明
  let a1 = Symbol()
  let a2 = Symbol()
  console.log(a1 === a2)
  // a3为key， S.for是先查找全局是否Symobol注册过，注册过取其值，没注册过新注册一个
  let a3 = Symbol.for('a3')
  let a4 = Symbol.for('a3')
  console.log(a3 === a4)
}

{
  let a1 = Symbol.for('abc')
  let obj = {
    [a1]: '123',
    'abc': 345,
    'c': 456
  }
  console.log(a1)
  console.log('obj', obj)

  // 获取非Symobol作为key值的属性值
  for (let [key, value] of Object.entries(obj)) {
    console.log('let of', key, value)
  }

  // 获取Symobol作为key值的属性值
  Object.getOwnPropertySymbols(obj).forEach(function (item) {
    console.log(obj[item])
  })
  // ownKeys获取所有作为key值的属性值
  Reflect.ownKeys(obj).forEach(function (item) {
    console.log('ownkeys', item, obj[item])
  })
}
