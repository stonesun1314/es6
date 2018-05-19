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
    target.myname='hello' //target是指类本身，myname是类的静态属性
  }
  //修饰器的声明
  @typename
  class Test{

  }
  console.log('类修饰符',Test.myname)
  //第三方秀时期js库 core-decorators
}

{

// x => x * x 
// 上面的箭头函数相当于
// function (x) {
//     return x * x;
// }
  let log=(type)=>{
    return function(target,name,descriptor){    //返回修饰器
      let src_method= descriptor.value;
      descriptor.value = (...arg)=>{
        src_method.apply(target,arg);
        console.info(`log${type}`)
      }
    }
  }
  class AD{
    @log('show')
    show(){
      console.info('ad is show')
    }
    @log('click')
    click(){
      console.info('ad is click')
    }
  }
  let ad = new AD()
  ad.show()
  ad.click()
}