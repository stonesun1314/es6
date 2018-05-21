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
      this.number.add(('' + 1).padStart(2, '0')) // 保持2位从长度，长度不够头部补0
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

  /**
   * 操作区
   * @param {type} e
   * @return {type}
   */
  assistHandle (e) {
    let self = this
    e.preventDefault()
    let $cur = $(e.currentTarget)
    let index = $cur.index()
    $('.boll-list .btn-boll').removeClass('btn-boll-active') // 清空，选操作区之前把之前的操作清掉
    if (index === 0) {
      $('.boll-list .btn-boll').each(function (i, t) {
        if (t.textContent - 5 > 0) {
          $(t).addClass('btn-boll-active')
        }
      })
    }
    if (index === 1) {
      $('.boll-list .btn-boll').each(function (i, t) {
        if (t.textContent - 5 > 0) {
          $(t).addClass('btn-boll-active')
        }
      })
    }
    if (index === 2) {
      $('.boll-list .btn-boll').each(function (i, t) {
        if (t.textContent - 6 < 0) {
          $(t).addClass('btn-boll-active')
        }
      })
    }
    if (index === 3) {
      $('.boll-list .btn-boll').each(function (i, t) {
        if (t.textContent % 2 == 0) {
          $(t).addClass('btn-boll-active')
        }
      })
    }
    if (index === 4) {
      $('.boll-list .btn-boll').each(function (i, t) {
        if (t.textContent % 2 == 0) {
          $(t).addClass('btn-boll-active')
        }
      })
    }

    self.getCount()
  }
  /**
   * 获取当前彩票名称
   */
  getName () {
    return this.name
  }

  /**
   * 添加号码
   */
  addCode () {
    let self = this
    let $active = $('.boll-list .btn-boll-active').text().match(/\d{2}/g)
    let active = $active ? $active.length : 0
    let count = self.computeCount(active, self.cur_play)
    if (count) {
      self.addCodeItem($active.join(''), self.cur_play, self.play_list.get(self.cur_play).name, count)
    }
  }

  /**
 * 追加单次号码
 * @param {*} code
 * @param {*} type
 * @param {*} typeName
 * @param {*} count
 */
  addCodeItem (code, type, typeName, count) {
    let self = this
    const tpl = `<li codes="${type}|${code}" bonus="${count * 2}" count="${count}">
    <div class="code">
      <b>${typeName}${count > 1 ? '复式' : '单式'}</b>
      <b class="em">${code}</b>
      [${count}注,<em class="code-list-money">${count * 2}</em>元]
    </div>
  </li>`

    $(self.cart_el).append(tpl)
    self.getTotal()
  }

  getCount () {
    let self = this
    let active = $('.boll-list .btn-boll-active').length
    let count = self.computeCount(active, self.cur_play)
    let range = self.computeBonus(active, self.cur_play)

    let money = count * 2
    let win1 = range[0] - money
    let win2 = rang[1] - money
    let tpl
    let c1 = (win1 < 0 && win2 < 0) ? Math.abs(win1) : win1
    let c2 = (win1 < 0 && win2 < 0) ? Math.abs(win2) : win2

    if (count === 0) {
      tpl = `您选了 <b class="red">${count}</b> 注，共 <b class="red">${count * 2}</b> 元`
    } else if (range[0] === range[1]) {
      tpl = `您选了 <b>${count}</b> 注，共 <b>${count * 2}</b> 元  <em>若中奖，奖金：
			<strong class="red">${range[0]}</strong> 元，
			您将${win1 >= 0 ? '盈利' : '亏损'}
			<strong class="${win1 >= 0 ? 'red' : 'green'}">${Math.abs(win1)} </strong> 元</em>`
    } else {
      tpl = `您选了 <b>${count}</b> 注，共 <b>${count * 2}</b> 元  <em>若中奖，奖金：
			<strong class="red">${range[0]}</strong> 至 <strong class="red">${range[1]}</strong> 元，
			您将${(win1 < 0 && win2 < 0) ? '亏损' : '盈利'}
			<strong class="${win1 >= 0 ? 'red' : 'green'}">${c1} </strong>
			至 <strong class="${win2 >= 0 ? 'red' : 'green'}"> ${c2} </strong>
			元</em>`
    }
  }
  /**
   * 计算所有金额
   */
  getTotal () {
    let count = 0
    $('.codelist li').each(function (index, item) { // 遍历购物车
      count += $(item).attr(count) * 1
    })
    $('#count').text(count)
    $('#money').text(count * 2)
  }

  /**
   * 生成随机数
   * @param {*} num
   */
  getRamdom (num) {
    let arr = [], index
    let number = Array.from(this.number)
    while (num--) {
      index = Number.parseInt(Math.random() * number.length)
      arr.push(number[index])
      number.splice(index, 1)
    }
    return arr.join(' ')
  }
  /**
   * 添加随机号码
   * @param {*} e
   */
  getRandomCode (e) {
    e.preventDefault()
    let num = e.currentTarget.getAttribute('count')
    let play = this.cur_play.match(/\d+/g)[0]
    let self = this
    if (num === '0') {
      $(self.cart_el).html('')
    } else {
      for (let i = 0; i < num; i++) {
        self.addCodeItem(self.getRamdom(play), self.cur_play, self.play_list.get(self.cur_play).name, 1)
      }
    }
  }
}

// 到处整个base模块
export default Base
