
class Timer {
  // 实现定时器的方法 end：截止时间 update：时间更新的回调 handle：结束时的回调
  countdown (end, update, handle) {
    const now = new Date().getTime()
    const self = this
    if (now - end) {
      handle.call(self)
    } else {
      let last_time = end - now
      const px_d = 1000 * 60 * 60 * 24
      const px_h = 1000 * 60 * 60
      const px_m = 1000 * 60
      const px_s = 1000

      let d = Math.floor(last_time / px_d) // 剩余天数
      let h = Math.floor((last_time - d * px_d) / px_h) // 剩余小时
      let m = Math.floor((last_time - d * px_d - h * px_h) / px_m) // 剩余分钟
      let s = Math.floor((last_time - d * px_d - h * px_h - px_m * m) / px_s) // 剩余秒

      let r = []
      if (d > 0) { // 天>0
        r.push(`<em>${d}</em>天`) // 保存剩余多少天
      }
      if (r.length || (h > 0)) { // 有木有天，且h>0
        r.push(`<em>${h}</em>时`) // 保存剩余多少小时
      }

      if (r.length || (m > 0)) { // 有木有天，且m>0
        r.push(`<em>${m}</em>分钟`) // 保存剩余多少分钟
      }
      if (r.length || (s > 0)) { // 有木有天，且m>0
        r.push(`<em>${s}</em>秒`) // 保存剩余多少秒
      }

      self.last_time = r.join('')
      update.call(self, r.join('')) // 一秒钟更新一次
      setTimeout(() => {
        self.countdown(end, update, handle)
      }, 1000)
    }
  }
}

export default Timer
