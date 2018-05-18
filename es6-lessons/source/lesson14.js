{
  let arr = ['hello', 'world']
  let map = arr[Symbol.iterator]()
  console.log(map.next())
  console.log(map.next())
  console.log(map.next())
}

{
  let obj = {
    start: [1, 3, 2],
    end: [7, 8, 9],
    [Symbol.iterator] () {
      let self = this
      let index = 0
      let arr = self.start.concat(self.end)
      let len = arr.length
      return {
        next () {
          if (index < len) {
            return {
              value: arr[index++],
              done: false
            }
          } else {
            return {
              value: arr[index++],
              done: true
            }
          }
        }
      }
    }
  }

  for (let key of obj) {
    console.log(key)
  }
}

{
  // for..of 需要iterator的支持，如果不支持需要手动实现
  let arr = ['hello', 'world']
  for (let value of arr) {
    console.log('value', value)
  }
}
