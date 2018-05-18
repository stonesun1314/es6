import { EROFS } from 'constants'

{
  // Proxy和reflect
  let obj = { // 供应商属性，原始对象，存储原始数据
    time: '2017-03-11',
    name: 'net',
    _r: 123
  }

  let monitor = new Proxy(obj, { // 生成代理对象，映射obj
    // 拦截对象属性的读取
    get (target, key) {
      return target[key].replace('2017', '2018')
    },
    // 拦截对象设置属性
    set (target, key, value) {
      if (key === 'name') {
        return target[key] = value
      } else {
        return target[key]
      }
    },
    // 拦截 key in obj操作
    has (target, key) {
      if (key === 'name') {
        return target[key]
      } else {
        return false
      }
    },

    // 拦截delete
    deleteProperty (target, key) {
      if (key.indexOf('_') > -1) {
        delete target[key]
        return true
      } else {
        return target[key]
      }
    },

    // 拦截遍历 Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
    ownKeys (target) {
      return Object.keys(target).filter(item => item != 'time')
    }

  })

  console.log('get', monitor.time)
  console.log('get-ori', obj.time)

  monitor.time = '2018'
  monitor.name = 'mukewang'
  console.log('set', monitor.time, monitor)
  console.log('set-ori', obj.time, obj)

  console.log('has', 'name' in monitor, 'time' in monitor)

  //   delete monitor.time
  //   delete monitor._r
  //   console.log('delete', monitor)

  console.log('ownkeys', Object.keys(monitor))
}

{
  // reflect 映射 和Proxy的用法一样有读取get、设置set、delete删除、遍历的操作
  let obj = { // 供应商属性，原始对象，存储原始数据
    time: '2017-03-11',
    name: 'net',
    _r: 123
  }

  console.log(Reflect.get(obj, 'time'))
  console.log(Reflect.set(obj, 'name', 'mukewang'))
  console.log(obj)
  console.log(Reflect.has(obj, 'name'))
}
{
  // 数据类型的校验的proxy 和 reflect 实现模块的解耦
  function validator (target, validator) {
    return new Proxy(target, {
      _validator: validator,
      set (target, key, value, proxy) {
        if (target.hasOwnProperty[key]) {
          let va = this._validator[key]
          if (va(value)) {
            return Reflect.set(target, key, value, proxy)
          } else {
            throw Error('不能设置${key}到￥{value}')
          }
        } else {
          throw Error('${key}不存在')
        }
      }
    })
  }
  const personValidators = {
    name (val) { // 判断name是否字符串，否则不允许修改
      return typeof val === 'string'
    },

    age (val) { // 判断年龄是否数字类型，且18岁以上
      return typeof val === 'number' && val > 18
    }
  }

  class Person {
    constructor (name, age) { // 构造函数
      this.name = name,
      this.age = age,
      this.mobile = '1111'
      return validator(this, personValidators)
    }
  }

  const person = new Person('lilei', 30)
  console.info(person)

  person.name = 'Han mei mei'
  console.info(person)
}
