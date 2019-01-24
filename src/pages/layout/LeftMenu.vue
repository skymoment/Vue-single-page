<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo item-bg"
      >
        <div style="text-align:center; padding: 10px;">
          <i class="el-icon-location" style="margin-right:5px;"></i>
          <span style="font-size: 18px;">家庭系统</span>
        </div>

        <el-submenu index="1" class="item-bg">
          <!-- group title --> 
          <template slot="title">
            <i class="el-icon-location" style="float:left; padding: 16px 0px;"></i>
            <p style="text-align: left; margin: 0px;">财务</p>
          </template>
          <!-- group 分组 -->
          <!-- <el-menu-item-group class="item-bg"> -->
          <el-menu-item  class="item-bg"index="1-1">
            <template slot="title">
              <i class="el-icon-location" style="float:left; padding: 16px 0px;"></i>
              <p style="text-align: left; margin: 0px;">保险</p>
            </template>
          </el-menu-item>
          <el-menu-item  class="item-bg"index="1-2">
            <template slot="title">
              <i class="el-icon-location" style="float:left; padding: 16px 0px;"></i>
              <p style="text-align: left; margin: 0px;">银行理财</p>
            </template>
          </el-menu-item>
          <!-- </el-menu-item-group> -->
<!--          
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1机智的的不</el-menu-item>
          </el-submenu> -->
        </el-submenu>

        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item
          index="3"
          disabled
        >
          <i class="el-icon-document"></i>
          <span slot="title">导航三二十年</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四按时</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>


<script>
export default {
  name: 'LeftMenu',
  methods: {
    // handleOpen(key, keyPath) {}
    //   // console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   // console.log(key, keyPath);
    // }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import '@/styles/custom-theme.scss';
.item-bg {
    background-color: $left-nav-item-bg-color !important;
}
</style>