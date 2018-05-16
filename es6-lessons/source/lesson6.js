
{
  let arr = Array.of(3, 4, 7, 9, 11)
  console.log('arr=', arr)

  let empty = Array.of()
  console.log('empty', empty)
}

{
  // Array.from 即有数组转换功能
  let p = document.querySelectorAll('p')
  let pArr = Array.from(p)
  pArr.forEach(function (item) {
    console.log(item.textContent)
  })
  console.log(Array.from([1, 3, 5], function (item) { return item * 2 }))
}

{
  // fill 替换功能
  console.log('fill-7', [1, 'a', undefined].fill(7)) // 把数组中的都替换成7
  console.log('fill,pos', ['a', 'b', 'c'].fill(7, 1, 3)) // 1：起始位置和 3：截止位置
}

{
  // 遍历 keys values entries
  for (let index of ['1', '2', '3'].keys()) {
    console.log('keys', index)
  }

  for (let value of ['3', '4', '5'].values()) {
    console.log('values', value)
  }

  for (let [index, value] of ['3', '4', '5'].entries()) {
    console.log('values', index, value)
  }
}

{
  console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4)) // 从哪个位置开始替换 从那个位置开始 到哪个位置截止
}

{
  // 查找
  console.log([1, 2, 3, 4, 5, 6].find(function (item) { // find找出第一个符合条件的value
    return item > 3
  }))

  console.log([1, 2, 3, 4, 5, 6].findIndex(function (item) { // find找出第一个符合条件的index
    return item > 3
  }))
}

{
  console.log('number', [1, 2, NaN].includes(NaN)) // 判断数组中是否包含某个元素
}
