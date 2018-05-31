<template>
  <div id="app">
    <ncheader/>
    <ncmenu ref="ncmenu" :menu="menu"/>
    <keep-alive>
    <router-view  v-wechat-title="$route.meta.title" class="routerView" :style="{ left: left + 'px' }"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      left: 0,
      menu: [{
        path: '/Channel',
        name: 'Channel',
        icon: 'el-icon-more',
        title: '渠道管理'
      }, {
        path: '/ChannelDataStatistics',
        name: 'ChannelDataStatistics',
        icon: 'el-icon-menu',
        title: '渠道数据统计'
      }]
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.left = this.$refs.ncmenu.$el.offsetWidth
    })
  }
}
</script>

<style>
  html,body,#app{
    height:100%;
  }
  .ncmenu{
    position:absolute;
    top: 20px;
    bottom: 0;
    left: 0;
    border-right: 1px solid #e6e6e6;
  }
  .ncmenu .el-menu{
    border:0;
  }
  .ncmenu h5{
    text-align: center;
  }
  .routerView{
    position:absolute;
    top: 20px;
    bottom: 0;
    right: 0;
  }
  .el-input{
    width:250px;
  }
</style>
