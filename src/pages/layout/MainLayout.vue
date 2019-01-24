<template>
    <div class="app-wrapper">
        <div class="sidebar-wrapper">
            <LeftMenu></LeftMenu>
        </div>
        <div class="main-container">
            <Navigation></Navigation>
            <MainView></MainView>
        </div>
    </div>
</template>

<script>
import LeftMenu from './LeftMenu'
import Navigation from './Navigation'
import MainView from './MainView'

export default {
    name: 'MainLayout',
    components: {
        LeftMenu,
        Navigation,
        MainView
    },
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

<style rel="stylesheet/scss" lang="scss" scoped>
@import '@/styles/custom-theme.scss';

.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    .sidebar-wrapper {
        width: 230px;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 1001;
        overflow: hidden;
        transition: all .28s ease-out;
        background-color: $left-menu-bg-color;
    }
    .main-container {
        min-height: 100%;
        transition: all .28s ease-out;
        padding-left: 230px;
    }
}
</style>
