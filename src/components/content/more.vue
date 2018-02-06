<template>
  <div>
    <div class="more">
      <div class="title">
        <router-link to="/more/music">音乐</router-link>
        <router-link to="/more/video">视频</router-link>
        <router-link to="/more/radio">电台</router-link>
      </div>
    </div>
    <keep-alive>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </keep-alive>
  </div>

</template>

<script type="es6">
  export default {}
</script>

<style lang="stylus" type="text/stylus" scoped>
  .more
    height:30px
    .title
      position:fixed
      display:flex
      width:100%
      top:50px
      background:rgba(6,2,2,.6)
      >a
        text-decoration:none
        color:rgba(255,255,255,.6)
        flex:1
        line-height:30px
        text-align:center
        &.active
          background:rgba(176, 188, 216,.6)
          color: white
</style>
