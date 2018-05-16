{
  let regex1 = new RegExp('xyz', 'i')
  let regex2 = new RegExp(/xyz/i)

  console.log(regex1.test('xyz123'), regex2.test('xyz123'))

  let regex3 = new RegExp(/xyz/ig, 'i')
  console.log(regex3.flags)
}

{
  // g、y都是全局匹配，但是g从上次匹配的位置继续寻找直到找到匹配的位置开始，
  // 不一定是第一个就匹配上，y修饰符必须是匹配城后的紧跟着的第一个字符就匹配成功才算

  let s = 'bbb_bb_b'
  let a1 = /b+/g
  let a2 = /b+/y

  console.log('one', a1.exec(s), a2.exec(s))
  console.log('two', a1.exec(s), a2.exec(s))

  console.log(a1.sticky, a2.sticky)
}
