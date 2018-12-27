<template>
    <section class="app-main" style="min-height: 100%;">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </section>
</template>

<script>
export default {
    name: 'MainView',
    computed: {
   
    },
    data(){
      return {}
    },
    methods:{
   
    },
    watch:{
  
    }
}
</script>

<style lang="scss">
@import '@/styles/theme.scss';

.app-main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $theme-color;
  /* margin-top: 60px; */
}
</style>
