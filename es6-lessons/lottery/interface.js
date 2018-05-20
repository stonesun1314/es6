import $ from 'jquery'
import { resolve } from 'url'
import { rejects } from 'assert'

class Interface {
  /**
   *
   * 获取遗漏函数
   * @param {string} issue [当前期号]
   * @memberof Interface
   * @return {[type]}   [description]
   */
  getOmit (issue) {
    let self = this
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/omit',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: function (res) { // res：服务端返回的数据
          self.setOmit(res.data) // 保存服务端返回的数据
          resolve.call(self, res)
        },
        error: function (err) {
          reject.call(err) // 如果出错，阻塞掉当前操作
        }
      })
    })
  }
  /**
   *
   * 获取开奖号码
   * @param {string} issue [期号]
   * @memberof Interface
   * @return {type} [description]
   */
  getOpenCode (issue) {
    let self = this
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/opencode',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: function (res) {
          self.setOpenCode(res.data)
          resolve.call(self, res)
        },
        error: function (err) {
          reject.call(err)
        }
      })
    })
  }

  /**
   * 获取当前状态
   *
   * @param {any} issue
   * @memberof Interface
   */
  getState (issue) {
    let self = this
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/state',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: function (res) {
          self.setOpenCode(res.data)
          resolve.call(self, res)
        },
        error: function (err) {
          reject.call(err)
        }
      })
    })
  }
}

// 导出当前接口,供外部import导入调用
export default Inf
