import { Z_HUFFMAN_ONLY } from 'zlib'

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

  // 数据类型不同不过滤，不会做数据类型的转换
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

{
  // WeakSet,元素只能是对象，不能number、boolean等，不会检测对象是否在其它地方引用，不考虑垃圾回收

  // 没有clear方法，没有set属性，不能遍历 ****
  let weakList = new WeakSet()
  let arg = {}

  weakList.add(arg)
  // weakList.add(2) error
  console.log('weakList', weakList)
}

{
  // Map，任意元素都可以当key
  let map = new Map()
  let arr = ['123']
  map.set(arr, 456)
  console.log('map', map, map.get(arr))
}
{
  let map = new Map([['a', 123], ['b', 456]])
  console.log('map args', map)
  console.log('delete', map.delete('a'), map)
  console.log('clear', map.clear(), map)
}

{
  // WeakMap, key必须是对象 没有clear方法，没有set属性，不能遍历 ****
  let weakmap = new WeakMap()

  // 报错，没有set 方法
  // let o = {}
  // weakmap.set(0, 123)
  // console.log(weakmap.get(o))
}
{
  // 数据结构横向对比，增删改查
  let map = new Map()
  let array = []
  map.set('t', 1)
  array.push({t: 1})
  console.log('map-array', map, array)

  // 查
  let map_exist = map.has('t') // 返回boolean
  let array_exist = array.find(item => item.t) // 返回查找的值
  console.log('map-array', map_exist, array_exist)

  // 改
  map.set('t', 2)
  array.forEach(item => item.t ? item.t = 2 : '')
  console.log('map-array-modify', map, array)

  // 删除
  map.delete('t')
  let index = array.findIndex(item => item.t)
  array.splice(index, 1)
  console.log('map-array-empty', map, array)
}

{
  // Set和Array的对比
  let set = new Set()
  let array = []

  // 增加
  set.add({t: 1})
  array.push({t: 1})

  console.info('set-array', set, array)

  // 查
  let set_exist = set.has({t: 1})
  let array_exist = array.find(item => item.t)
  console.info('set-array', set_exist, array_exist)

  // 改
  set.forEach(item => item.t ? item.t = 2 : '')
  array.forEach(item => item.t ? item.t = 2 : '')
  console.log('set-array-modify', set, array)

  // 删除
  set.forEach(item => item.t ? set.delete(item) : '')
  let index = array.findIndex(item => item.t)
  array.splice(index, 1)
  console.log('set-array-empty', set, array)
}

{
  let item = {t: 1}
  let map = new Map()
  let set = new Set()
  let obj = {}

  // 增
  map.set('t', 1)
  set.add(item)
  obj['t'] = 1

  console.log('map-set-obj', map, set, obj)

  console.info({
    map_exist: map.has('t'),
    set_exist: set.has(item),
    obj_exist: 't' in obj
  })

  // 改
  map.set('t', 2)
  item.t = 2
  obj['t'] = 2

  console.log('map-set-obj-modify', map, set, obj)

  // 删除
  map.delete('t')
  set.delete(item)
  delete obj['t']
  console.log('map-set-obj-empty', map, set, obj)
}
