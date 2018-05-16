
{
  // 二进制0b或者0B开头
  console.log(0b111110111)
  // 八进制0o开头
  console.log(0o767)
}

{
  // 判断是否是一个数字
  console.log('15', Number.isFinite(15)) // 判断数字是否有限
  console.log('NaN', Number.isFinite(NaN))
  console.log('1/0', Number.isFinite('true' / 0)) // 判断坟墓是否为0
  console.log('NaN', Number.isNaN(NaN)) // 判断是否非数字
  console.log('0', Number.isNaN(0))
}

{
  console.log('25', Number.isInteger(25))
  console.log('25.0', Number.isInteger(25.0)) // 25.0当成25了，认为其实一样的
  console.log('25.1', Number.isInteger(25.1))
  console.log('25.1', Number.isInteger('25.1'))
}
{
  console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER) // 最大的int和最小的int
  console.log('10', Number.isSafeInteger(10))
  console.log('10', Number.isSafeInteger('10'))
  console.log('a', Number.isSafeInteger('a'))
}
{
  // 小数取整
  console.log(4.1, Math.trunc(4.1))
  console.log(4.9, Math.trunc(4.9))
}
{
  // 判断正负数、0,非数字
  console.log('-5', Math.sign(-5))
  console.log('0', Math.sign(0))
  console.log('5', Math.sign(5))
  console.log('50', Math.sign('50'))
  console.log('foo', Math.sign('foo'))
}

{
  // 立方根
  console.log('-1', Math.cbrt(-1))
  console.log('8', Math.cbrt(8))
}


