<template>
  <div class="container">
    <div style="margin-top: 88%;">
      <div class="input-box">
        <p class="input-box-tip">手机号</p>
        <input v-model="mobile" class="input-box-input" type="tel" placeholder="请输入手机号码" maxlength="11">
        <div style="clear: both;"></div>
      </div>
      <div class="input-box">
        <p class="input-box-tip">验证码</p>
        <input v-model="code" class="input-box-input" style="width: 100px;" type="tel" placeholder="请输入验证码">
        <div @click="sendSMS" class="input-box-btn"><p class="btn-tip">{{sms.msg}}</p></div>
        <div style="clear: both;"></div>
      </div>
      <div class="btn" @click="submit"><p class="btn-tip">立即领钱</p></div>
    </div>
    <!-- 弹框 -->
    <div v-show="isShowDialog" class="dialog-container">
      <div class="dialog">
        <div class="dialog-close" @click="isShowDialog = false"></div>
        <div class="dialog-btn" @click="dialogBtnClick"><p class="dialog-btn-tip">点击拿钱</p></div>
      </div>
    </div>
    <!-- 图形验证码 -->
    <img-code 
      :show="isShowCaptcha"
      :scenario="scenario"
      :mobile="mobile"
      @dismissCaptcha="dismissCaptcha"
      @getCaptchaToken="getCaptchaToken">
    </img-code>
  </div>
</template>

<script>
import ImgCode from '../components/img-code.vue'

export default {
  name: 'container',
  components: {
    imgCode: ImgCode
  },
  data() {
    let ref = this.$route.query.ref || ''
    this.$viewLog.log(1, ref)
    return {
      isShowDialog: false,
      isShowCaptcha: false,
      captcha_token: '',
      scenario: 'login',
      mobile: '',
      code: '',
      sms: {
        time: 60,
        timer: null,
        msg: '获取验证码'
      },
      ref: ref
    }
  },
  methods: {
    submit() {
      if (this.mobile.length < 11) {
        this.$layer.msg('手机号位数需为11位')
        return
      }

      if (this.code.length < 4) {
        this.$layer.msg('验证码不合法')
        return
      }

      let params = {
        mobile: this.mobile,
        code: this.code,
        ref: this.ref
      }
      let loader = this.$loading.show()
      this.$ajax.post('auth/login-by-code', params, (res) => {
        loader.hide()
        if (res.code === 200) {
          this.isShowDialog = true
          this.$viewLog.log(3, this.ref, this.mobile)
        } else {
          this.$layer.msg(res.message)
        }
      })
    },
    dialogBtnClick() {
      this.$viewLog.log(4, this.ref, this.mobile)
      window.location.href = 'http://m.jdh.daidianhua.com'
    },
    /**
     * 短信验证码
     */
    sendSMS() {
      console.log(this.mobile)
      if (this.mobile.length < 11) {
        this.$layer.msg('手机号位数需为11位')
        return
      }

      if (this.sms.time < 60) {
        return
      }
      let params = {
        mobile: this.mobile,
        scenario: this.scenario,
        captcha_token: this.captcha_token
      }
      if (!this.captcha_token || this.captcha_token === '') {
        params.captcha_token = null
      }
      this.$ajax.post('auth/smscode', params, (res) => {
        if (res.code === 200) {
          console.log('发送成功')
          this.$viewLog.log(2, this.ref, this.mobile)
          this.normal = true
          this.sms.timer = setInterval(() => {
            this.sms.time = this.sms.time - 1
            this.sms.msg = this.sms.time + 's'
            if (this.sms.time <= 0) {
              this.sms.msg = '重新发送'
              this.sms.time = 60
              this.normal = false
              clearInterval(this.sms.timer)
            }
          }, 1000)
          return
        }
        if (res.code === 40022) {
          this.showCaptcha()
        } else {
          this.$layer.msg(res.message)
        }
      })
    },
    /**
     * 图形验证码
     */
    showCaptcha() {
      this.isShowCaptcha = true
    },
    getCaptchaToken(token) {
      this.captcha_token = token
    },
    dismissCaptcha() {
      this.isShowCaptcha = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";

.container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  background: url('../assets/spread_1/s1_back.png') no-repeat;
  background-size: 100%;
  background-color: #2B019A;
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  min-width: 320px;
  max-width: 768px;

  .input-box {
    margin-left: px2rem(20);
    margin-right: px2rem(20);
    margin-top: px2rem(10);
    height: px2rem(50);
    background-color: white;
    border-radius: px2rem(6);
  }
  .btn {
    margin-left: px2rem(20);
    margin-right: px2rem(20);
    margin-top: px2rem(25);
    height: px2rem(50);
    background-color: #4992FE;
    border-radius: px2rem(6);
    .btn-tip {
      font-size: px2rem(16);
      line-height: px2rem(50);
      color: white;
      text-align: center;
    }
  }
  .input-box-tip {
    float: left; 
    padding-left: px2rem(15); 
    padding-right: px2rem(15);
  }
  .input-box-input {
    float: left; 
    font-size: px2rem(15); 
    width: px2rem(120);
    height: px2rem(48);
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .input-box-btn {
    float: right;
    height: px2rem(50);
    color: #4992FE;
    padding-right: px2rem(15);
  }

  .dialog-container {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    min-width: 320px;
    max-width: 768px;
    background-color: rgba(0, 0, 0, 0.7);
    .dialog {
      background: url('../assets/spread_1/s1_dialog_back.png') no-repeat;
      background-size: 100%;
      width: px2rem(315);
      height: px2rem(360);
      position: absolute;
      left: 50%;
      transform: translateX(-50%) translateY(50%);
      .dialog-close {
        background: url('../assets/white_close.png') no-repeat;
        background-size: 100%;
        width: px2rem(14);
        height: px2rem(14);
        margin-right: px2rem(15);
        margin-top: px2rem(15);
        float: right;
      }
      .dialog-btn {
        left: px2rem(20);
        right: px2rem(20);
        bottom: px2rem(25);
        height: px2rem(50);
        position: absolute;
        background-color: #4992FE;
        border-radius: px2rem(6);
        .dialog-btn-tip {
          font-size: px2rem(16);
          color: white;
        }
      }
    }
  }
}
</style>