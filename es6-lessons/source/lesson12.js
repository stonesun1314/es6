// 类与定向
{
  // 基本定义和生成实例
  class Parent {
    constructor (name = 'mukewang') {
      this.name = name
    }
  }
  let v_parent = new Parent('v')
  console.log('构造函数和实例', v_parent)
}

{
  // 继承
  class Parent {
    constructor (name = 'mukewang') {
      this.name = name
    }
  }
  // 通过 extends
  class Child extends Parent {

  }
  console.log('继承', new Child())
}

{
  // 继承与传递参数
  class Parent {
    constructor (name = 'mukewang') {
      this.name = name
    }
  }
  // 通过 extends
  class Child extends Parent {
    constructor (name = 'child') { // 继承父类，及传递参数,继承父类参数，super调用放在第一行
      super(name)
      this.type = 'child'
    }
  }
  console.log('继承', new Child('Hello'))
}

{
  // getter,setter
  class Parent {
    constructor (name = 'mukewang') {
      this.name = name
    }
    get longName () {
      return 'mk' + this.name
    }

    set longName (value) {
      this.name = value
    }
  }

  let v = new Parent()
  console.log('getter', v.longName)
  v.longName = 'hello'
  console.log('setter', v.longName)
}

{
  // 静态方法
  class Parent {
    constructor (name = 'mukewang') {
      this.name = name
    }
    static tell () { // 用static描述，通过类调用，而不是实例
      console.log('tell')
    }
  }
  Parent.tell()
}
{
  // 静态属性
  class Parent {
    constructor (name = 'mukewang') {
      this.name = name
    }
  }
  // 通过直接在类上定义，而非static
  Parent.type = 'test'
  console.log('静态属性', Parent.type)
}
