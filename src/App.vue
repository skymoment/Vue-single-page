
<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="scss" scoped>
@import '@/styles/theme.scss';

.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  max-width: 768px;
  min-width: 320px;
  margin: 0 auto;
  background-color: white;
}
</style>
