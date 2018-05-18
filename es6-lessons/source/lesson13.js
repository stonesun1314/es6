{
  // ES5中的回调
  // 模拟ajax过程
  let ajax = function (callback) {
    console.log('执行')
    setTimeout(function () {
      callback && callback.call()
    }, 1000)
  }
  ajax(function () {
    console.log('timeout')
  })
}
{
  // ES6
  let ajax = function () {
    console.log('执行2')
    return new Promise(function (resolve, reject) { // resolve：执行下一步的操作 reject:中断当前的操作
      setTimeout(function () {
        resolve()
      }, 1000)
    })
  }
  ajax().then(function () {
    console.log('promise', 'timeout2')
  })
}

{
  // 多重异步
  let ajax = function () {
    console.log('执行3')

    return new Promise(function (resolve, reject) { // resolve：执行下一步的操作 reject:中断当前的操作
      setTimeout(function () {
        resolve()
      }, 1000)
    })
  }

  ajax()
    .then(function () {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve()
        }, 2000)
      })
    })
    .then(function () {
      console.log('timeout3')
    })
}

{
  // 多重异步异常错误的捕获
  let ajax = function () {
    console.log('执行3')

    return new Promise(function (resolve, reject) {
      if (num > 5) {
        resolve()
      } else {
        throw new Error('出错了')
      }
    })
  }

  ajax(6).then(function () {
    console.log('log', 6)
  }).catch(function (e) {
    console.log('catch', e)
  })
}

{
  // 所有图片加载完再添加页面

  // 下载图片
  function loadImg (src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img')
      img.src = src
      img.onload = function () {
        resolve(img)
      }
      img.onerror = function (err) {
        reject(err)
      }
    }
    )
  }
  // 添加到页面上
  function showImgs (imgs) {
    imgs.forEach(function (img) {
      document.body.appendChild(img)
    })
  }
  // all：标识把多个Promise实例当做一个Promise实例。当所有的实例状态改变后才回改变状态
  Promise.all([
    loadImg('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1732824657,1406373938&fm=27&gp=0.jpg'),
    loadImg('https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=258783302,288762116&fm=27&gp=0.jpg'),
    loadImg('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2923697766,806675961&fm=27&gp=0.jpg')

  ]).then(showImgs)
}

{
  // 不按先后顺序，谁先加载完显示谁，不按顺序

  // 下载图片
  function loadImg (src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img')
      img.src = src
      img.onload = function () {
        resolve(img)
      }
      img.onerror = function (err) {
        reject(err)
      }
    }
    )
  }

  function showImgs (img) {
    let p = document.createElement('p')
    p.appendChild(img)
    document.body.appendChild(p)
  }

  // race谁先下载完显示谁，其它的不管
  Promise.race([
    loadImg('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1732824657,1406373938&fm=27&gp=0.jpg'),
    loadImg('https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=258783302,288762116&fm=27&gp=0.jpg'),
    loadImg('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2923697766,806675961&fm=27&gp=0.jpg')

  ]).then(showImgs)
}

// race谁先下载完显示谁，其它的不管
Promise.race([
  loadImg('url'),
  loadImg('url'),
  loadImg('url')

]).then(showImgs)
