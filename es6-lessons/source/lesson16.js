{
  // 假如修饰器的功能就是限制某个属性是只读的
  let readonly = function (target, name, descriptior) {
    descriptior.writable = false
    return descriptior
  }

  class Test{
      @readonly
      time(){
          return '2017-03-11'
      }
  }
  let test = new Test()
  // test.time = function(){   //报错，time是只读属性
  //   console.log('reset time');
  // }
  console.log(test.time())
}

{

  let typename = function(target,name,descriptor){
    target.myname='hello' //myname是类的静态属性
  }
  //修饰器的声明
  @typename
  class Test{

  }
  console.log('类修饰符',Test.myname)
}