
<template>
  <div>
    <div v-show="showImageCode" class="imgcode-mask">
      <div class="box">
        <div class="title">图形验证码</div>
        <div class="tip">点击图片可以刷新验证码</div>
        <div class="input-box">
          <div class="img-contanier" @click="getImage">
              <img :src="img_src">
          </div>
          <div class="input-container">
            <input v-model="captcha" style="text-align: center;font-size: 15px; width:140px; height: 50px; background: none !important; outline: none !important; border-width: 0px; border: 0px;	margin:0;	padding:0;" type="text" placeholder="请输入图片中的文字">
          </div>
        </div>
        <div class="line"></div>
        <div class="cancel-btn" @click="dismissClick">取消</div>
        <div class="v-line"></div>
        <div class="sure-btn" @click="verifyCaptcha">验证</div>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      img_src:'',
      showImageCode: false,
      // 用户输入的图形验证码
      captcha: '',
      error_msg:'',
    }
  },
  /**
   * 属性
   * @param {String} verify   是否启用验证
   * @param {String} scenario 验证场景
   * @param {String} mobile    手机
   */
  props: {
    show: {
      type: Boolean
    },
    scenario: {
      type: String
    },
    mobile: {
      type: String
    }
  },
  watch: {
    show: function(val) {
      if (val) {
        // val 为 true 即 show = true
        this.captcha = ''
        this.getImage()
      }
      this.showImageCode = val
    },
    captcha: function(val) {
      this.error_msg = ''
    }
  },
  methods: {
    // 验证码图形验证码
    verifyCaptcha() {
      let params = {
        mobile: this.mobile,
        scenario: this.scenario,
        captcha: this.captcha
      }
      this.$ajax.post('auth/validate-captcha', params, (res) => {
        if (res.code === 200) {
          let captcha_token = res.data.captcha_token
          this.$emit('getCaptchaToken', captcha_token)
          this.showImageCode = false
        } else if(res.code === 40016) {
          // 验证码失效
          this.getImage()
          this.captcha = ''
        } else {
          this.$layer.msg(res.message)
        }
      })
    },
    // 获取图形验证码
    getImage() {
      let params = {
        mobile: this.mobile,
        scenario: this.scenario,
      }
      this.$ajax.post('auth/captcha', params, (res) => {
        if (res.code === 200) {
          let captcha = res.data.captcha
          console.log(captcha)
          this.img_src = captcha
        } else {
          this.$layer.msg(res.message)
        }
      })
    },
    dismissClick() {
      this.$emit('dismissCaptcha')
    }
  }
};
</script>
<style lang="scss" scoped>
.imgcode-mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 998;
}
.box {
    text-align: center; /*让div内部文字居中*/
    background-color: #fff;
    border-radius: 20px;
    width: 300px;
    height: 259px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .title {
        font-size: 18px;
        padding-top: 15px;
        padding-bottom: 4px;
    }

    .tip {
      font-size: 12px;
      color: #bbbbbb;
    }

    .img-contanier {
      margin: 0 auto; 
      width: 150px;
      height: 50px;
      padding: 5px; 
    }

    .input-container {
      margin: 5px auto;
      width: 200px; 
      height: 50px;
      border-color: black;
      border-width: 0.5px;
      border-radius: 5px;
      border-style: solid;
    }

    .line {
      background-color: #bbbbbb;
      width: 100%;
      height: 1px;
      margin-top: 16px;
    }

    .cancel-btn {
      float: left;
      width: 149px;
      height: 50px;
      font-size: 17px;
      line-height: 50px;
      color: #7b7b7b;
    }
    .input-box {
      padding-bottom: 8px;
    }
    .v-line {
      background-color: #bbbbbb;
      width: 1px;
      height: 50px;
      float: left;
    }

    .sure-btn {
      float: left;
      width: 149px;
      height: 50px;
      font-size: 17px;
      line-height: 50px;
      color: red;
    }
}
</style>
