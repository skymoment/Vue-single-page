import ajax from '../ajax'

export function log(ev, ref, mobile) {
  // ev: 1:访问落地页； 2、获取短信验证码成功 3、注册/登录成功 4、点击跳转
  let params = {
    ev: ev,
    ref: ref,
    mobile: mobile || ''
  }
  ajax.post('trc/ch', params, (res) => {
    if (res.code !== 200) {
      console.log('tch er')
    }
  })
}

export default {
  log
}