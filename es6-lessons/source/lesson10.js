{
  let list = new Set()
  list.add(5)
  list.add(7)

  console.log('size', list.size)
}

{
  let arr = [1, 2, 3, 4, 5]
  let list = new Set(arr)
  console.log('size', list.size)
}

{
  // set中的元素必须是唯一的,重复添加不生效。可以去重，过滤重复元素
  let list = new Set()
  list.add(1)
  list.add(2)
  list.add(1)

  console.log('list', list)

  // 数据类型不同不过滤
  let arr = [1, 2, 3, 1, '2']
  let list2 = new Set(arr)
  console.log('unique', list2)
}

{
  // set 移除:delete add:添加 clear:清空 has:包含
  let arr = ['add', 'delete', 'clear', 'has']
  let list = new Set(arr)

  console.log(('has', list.has('add')))
  console.log('delete', list.delete('delete'), list)
  list.clear()
  console.log('list', list)
}

{
  let arr = ['add', 'delete', 'clear', 'has']
  let list = new Set(arr)

  // key和value的值是一样的
  for (let key of list.keys()) {
    console.log('keys', key)
  }
  for (let value of list.values()) {
    console.log('values', value)
  }

  list.forEach(function (item) {
    console.log(item)
      
  })
}
