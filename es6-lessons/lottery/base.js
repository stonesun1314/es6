import $ from 'jquery'

// 切换玩法提示内容如何保存
// 注数、金额等数据的保存
// 玩法名字显示如何保存
class Base {
  /**
     * 初始化玩法和玩法的说明
     * @return {type} [description]
     */
  initPlayList () {
    this.play_list_set.set('r2', {
      bound: 6,
      tip: `<span>从01~11中任选2个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">6</em>元</span>`,
      name: '任二'
    })
      .set('r3', {
        bound: 19,
        tip: `<span>从01~11中任选3个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">19</em>元</span>`,
        name: '任三'
      })
      .set('r4', {
        bound: 78,
        tip: `<span>从01~11中任选4个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">78</em>元</span>`,
        name: '任四'
      })
      .set('r5', {
        bound: 540,
        tip: `<span>从01~11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">540</em>元</span>`,
        name: '任五'
      })
      .set('r6', {
        bound: 90,
        tip: `<span>从01~11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">90</em>元</span>`,
        name: '任六'
      })
      .set('r7', {
        bound: 26,
        tip: `<span>从01~11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">26</em>元</span>`,
        name: '任七'
      })
      .set('r8', {
        bound: 9,
        tip: `<span>从01~11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">26</em>元</span>`,
        name: '任八'
      })
  }
  /**
   * 初始化号码
   *
   * @memberof Base
   */
  initNumber () {
    for (let i = 1; i < 12; i++) {
      this.initNumber.add(('' + 1).padStart(2, '0')) // 保持2位从长度，长度不够头部补0
    }
  }
  /**
   * 设置遗漏数据
   * @param {*} omit [description]
   */
  setOmit (omit) {
    let self = this
    self.omit.clear()
    for (let [index, item] of omit.entries()) { // map通过entries获取key,value
      self.omit.set(index, item)
    }
    $(self.omit_el).each(function (index, item) {
      $(item).text(self.omit.get(index))
    })
  }

  /**
   * 设置开奖
   *
   * @param {any} code
   * @memberof Base
   */
  setOpenCode (code) {
    let self = this
    self.open_code.clear()
    for (let item of code.values()) {
      self.open_code.add(item)
    }
    self.updateOpenCode && self.updateOpenCode.call(self, code)
  }

  /**
   * 号码选中取消
   * @param {type} e [description]
   * @return {type} [description]
   */
  toggleCodeActive (e) {
    let self = this
    let $cur = $(e.currentTarget)
    $cur.toggleClass('btn-boll-active')
    self.getCount()
  }

  /**
   * 却换玩法
   *
   * @param {any} e
   * @memberof Base
   */
  changePlayNav (e) {
    let self = this
    let $cur = $(e.currentTarget) // currentTarget：发生在哪个DOM上的事件
    $cur.addClass('active').siblings().removeClass('active') // 当前玩法添加class active，其它玩法取消class active
    self.cur_play = $cur.attr('desc').toLocaleUpperCase()
    $('#zx_sm span').html(self.play_list.get(self.cur_play).tip)
    $('.boll-list .btn-boll').removeClass('btn-boll-active') // 切换玩法把上一期选的号码清空掉
    self.getCount() // 重新计算
  }
}
