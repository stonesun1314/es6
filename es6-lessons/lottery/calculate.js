
// 跟彩票计算相关的封装
class Calculate {
  /**
   *计算注数
   *
   * @param {number} active [当前选中号码的个数]
   * @param {string} play_name
   * @memberof Calculate
   * @return {number} [注数]
   */
  computeCount (active, play_name) {
    let count = 0 // 判断当前注数
    const exist = this.play_list.has(play_name) // 判断当前玩法是否存在
    const arr = new Array(active).fill('0') // 生成一个数组，存储选的号码. 指定数组长度，并填充默认值（ES6用法)
    if (exist && play_name.at(0) === 'r') { // 判断玩法的首字母是不是'r'
      count = Calculate.combine(arr, play_name.split('')[1]) // combine是静态方法
    }
    return count
  }

  /**
   *
   * 奖金范围预测
   * @param {string} active [当前选中的号码]
   * @param {string} play_name [当前的玩法标识]
   * @memberof Calculate
   * @returns {array}   [奖金范围]
   */
  computeBouns (active, play_name) {
    const play = play_name.split('')    //当前玩法的基数
    const self = this                   //保存当前对象的指向
    let arr = new Array(play[1] * 1).fill(0) // 获取当前玩法，玩法匹配数组，并填充默认值
    let min, max
    let(play[0] === 'r'){       
        let min_active = 5-(11-active)  //最小命中数
        if(min_active > 0){
            if(min_active-play[1] >= 0){
                arr = new Array(min_active).fill(0) //初始化，并填充数组
                min = Calculate.combine(arr,play[1]).length
            }else{
                if(play[1]-5>0&&active-play[1]>=0){     //玩法是否大于任5以上，开奖注数都是5
                    arr = new Array(active-5).fill(0)
                    min=Calculate.combine(arr,play[1]-5).length
                }else{
                    min = active-play[1]>-1?1:0
                }
            }
        }else{
            min = active-play[1]>-1?1:0
        }

        let max_active = Math.min(active,5)
        if(play[1]-5>0){    //如果任五以上玩法，分开算
            if(active-play[1]>=0){
                arr = new Array(active-5).fill(0)
                max= Calculate.combine(arr,play[1]-5).length
            }else{
                max = 0
            }
        }else if(play[1]-5<0){
            arr = new Array(Math.min(active,5)).fill
            max = Calculate.combine(arr,play[1]).length
        }else{
            max = 1;
        }
    }
    return [min,max].map((item) => item*self.play_list.get(play_name).bounds)
  }

  /**
   * 组合运算
   * @param {array} arr     [参与组合运算的组数]
   * @param {number} size [组合运算的基数]
   * @return {number} [计算注数]
   */
  static combine (arr, size) {
    let allResult = []
    (function f (arr, size, result) {
      let arrLen = arr.length
      if (size > arrLen) {
        return
      }
      if (size === arrLen) {
        allResult.push([].concat())
      } else {
        for (let i = 0; i < arrLen; i++) {
          let newResult = [].concat(result)
          newResult.push(arr[i])
          if (size === 1) {
            allResult.push(newResult)
          } else {
            let newArr = [].concat(arr)
            newArr.splice(0, i + 1)
            f(newArr, size - 1, newResult)
          }
        }
      }
    })(arr, size, [])
  }
}


export default Calculate