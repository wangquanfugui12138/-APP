<template>
  <div>
    <div class="bg_wrapper">
      <div class="bg"></div>
    </div>
    <transition name="fade" mode="out-in">
      <v-side></v-side>
    </transition>
    <v-header></v-header>
    <keep-alive>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </keep-alive>
    <v-footer></v-footer>
    <transition name="Y-fade" mode="out-in">
      <v-curList></v-curList>
    </transition>
    <transition name="Y-fade" mode="out-in">
      <v-playList></v-playList>
    </transition>
  </div>
</template>

<script type="es6">
  import header from './components/header/header.vue';
  import footer from './components/footer/footer.vue';
  import side from './components/side/side.vue';
  import curList from './components/currentList/curList.vue';
  import playList from './components/playList/playList.vue'
  import store from './store/store.js'

  export default {
    components: {
      'v-header': header,
      'v-footer': footer,
      'v-side': side,
      'v-curList':curList,
      'v-playList':playList
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  body
    font-family: "Microsoft YaHei"
    .bg_wrapper
      z-index:-1
      position:fixed
      width:100%
      height:100%

  .bg
    z-index:-1
    position:absolute
    width:100%
    height:100%
    background:url('./assets/images/bg1.jpg') no-repeat
    background-size:100% 100%;

  .fade-enter-active, .fade-leave-active
    transition: all 0.5s ease-out
  .fade-enter, .fade-leave-to
    transform: translateX(-100%)
    opacity: 0
  .fade-leave, .fade-enter-to
    opacity: 1

  .Y-fade-enter-active, .Y-fade-leave-active
    transition: all 0.5s ease-out
  .Y-fade-enter, .Y-fade-leave-to
    transform:translateY(100%)
    opacity: 0
  .Y-fade-leave, .Y-fade-enter-to
    opacity: 1
</style>
