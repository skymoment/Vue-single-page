
/**
 * 获取 cookie 值
 * @param {String} name cookie 名称
 * @returns {String} value cookie 值
 */
export function get(name) {
  let arr = null
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if ((arr = document.cookie.match(reg))) {
    return unescape(arr[2])
  } else {
    return ''
  }
}

/**
 * 设置 cookie
 * @param {String} name cookie 名称
 * @param {String} value cookie 值
 * @param {String} path cookie 路径
 * @param {Number} cycle cookie 的生命周期，单位秒
 * @example
 * // 设置名为 _token 值为 tokenValue 到域名根路径，过期时间为 36000 秒
 * set('_token', tokenValue, '/', 36000)
 */
export function set(name, value, path, cycle) {
  let expires = ''
  let maxCycle = new Date()
  if (cycle) {
    maxCycle.setTime(maxCycle.getTime() + cycle * 1000)
  }
  expires = ';expires=' + maxCycle.toGMTString()
  path = path ? ';path=' + path : ''
  document.cookie = name + '=' + escape(value) + expires + path
}

/**
 * 删除 cookie
 * @param {String} name cookie 名称
 * @param {String} path cookie 路径
 */
export function remove(name, path) {
  let endCycle = new Date()
  endCycle.setTime(endCycle.getTime() - 1)
  let delValue = this.get(name)
  path = path ? ';path=' + path : ''
  document.cookie = name + '=' + delValue + ';expires=' + endCycle.toGMTString() + path
}

/**
 * 检查是否支持 cookie
 * @returns {Boolean} 当前浏览器是否支持 cookie
 */
export function support() {
  return navigator.cookieEnabled
}

// 导出默认模块
export default {
  get,
  set,
  remove,
  support
}
