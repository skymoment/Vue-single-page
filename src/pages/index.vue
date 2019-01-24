<template>
  <div class="container">
    <!-- <img alt="Vue logo" src="@/assets/logo.png"> -->
    <!-- <a href="itms-services://?action=download-manifest&url=https://yunzhiyipub-test.oss-cn-hangzhou.aliyuncs.com/20181213/manifest.plist">`4123414</a> -->
    <div class="title">I'm index</div>
    <el-button @click="goIndexAction">to index</el-button>
  </div>
</template>

<script>
export default {
  name: "container",
  methods: {
    goIndexAction() {
      this.$router.push('/')
    }
  }
};
</script>

<style lang="scss">
@import '@/styles/custom-theme.scss';

.container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $theme-color;
  /* margin-top: 60px; */
  width: 200px;
  height: 200px;
}

.title {
  font-size: 50px;
}
</style>