import { loadavg } from 'os'

{
  console.log('a', '\u0061')
  console.log('u', '\u20BB7')

  console.log('u', '\u{20BB7}') // 𠮷
}

{
  let s = '𠮷'
  console.log('length', s.length)
  console.log('0', s.charAt(0))
  console.log('0', s.charAt(1))
  console.log('0', s.charCodeAt(0))
  console.log('0', s.charCodeAt(1))

  let s1 = '𠮷a'
  console.log('length', s1.length)
  console.log('code0', s1.codePointAt(0))
  console.log('code0', s1.codePointAt(0).toString(16))
  console.log('code1', s1.codePointAt(1))
  console.log('code2', s1.codePointAt(2))
}

{
  console.log(String.fromCharCode(0x20bb7))
  console.log(String.fromCodePoint(0x20bb7))
}

{
  let str = '\u{20bb7}abc'
  // ES5,是乱码
  for (let i = 0; i < str.length; i++) {
    console.log('es5', str[i])
  }
  // ES6.尝尝输出
  for (let code of str) {
    console.log('es6', code)
  }
}

{
  // 判断字符串中是否包含某些字符，是否已以XXX起始或者截止*****
  let str = 'string'
  console.log('includes', str.includes('c'))
  console.log('start', str.startsWith('str'))
  console.log('end', str.endsWith('ng'))
}

{
  let str = 'abc'
  console.log(str.repeat(2)) // 复制拼接字符串
}

{
  let name = 'list'
  let info = 'hello world'
  let m = `i am ${name},${info}` // 外边的不是引号，是数字1左边的键，引用对象用$标注并用{}抱起来
  console.log(m)
}

{
  // 补白，位数不够用0补位
  console.log('1'.padStart(2, '0')) // 向前补位
  console.log('1'.padEnd(2, '0'))
}

{
  let user = {
    name: 'list',
    info: 'hello world'
  }
  abc`i am ${user.name},${user.info}`
  console.log(abc`i am ${user.name},${user.info}`)
  function abc (s, v1, v2, v3) {
    console.log(s, v1, v2, v3)
    return s + v1 + v2 + v3
  }
}

{
  console.log(String.raw`Hi\n${1 + 2}`)
  console.log(`Hi\n${1 + 2}`)
}
