<template>
  <div class="container">
    <img alt="Vue logo" src="@/assets/logo.png">
    <div class="title">I'm index</div>
  </div>
</template>

<script>
export default {
  name: 'container'
}
</script>

<style lang="scss">
@import '@/styles/theme.scss';

.container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $theme-color;
  /* margin-top: 60px; */
}

.title {
  font-size: 50px;
}
</style>