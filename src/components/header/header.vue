<template>
  <div class="header">
      <div class="header-item">
        <div class="navbar-toggle" @click="$store.state.side=true">
          <span class="sr-only"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </div>
      </div>
      <div class="header-item">
        <router-link to="/list" class="glyphicon glyphicon-music"></router-link>
        <router-link to="/more" class="glyphicon glyphicon-home"></router-link>
        <router-link to="/news" class="glyphicon glyphicon-user"></router-link>
      </div>
      <div class="header-item">
        <router-link to="/search" class="glyphicon glyphicon-search"></router-link>
      </div>
  </div>
</template>

<script type="es6">
  import store from '../../store/store.js'

  export  default {}
</script>

<style lang="stylus" type="text/stylus" scoped>
  .header
    overflow:hidden
    z-index:20
    display:flex
    position: fixed
    width:100%
    height: 50px
    font-size:18px
    color:white
    background:rgba(6,2,2,.6)
    :nth-child(1)
      flex:1
    :nth-child(2)
      flex:3
      display:flex
      >a
       text-decoration:none
       color:rgba(255,255,255,.7)
       display: block
       flex:1
       padding: 10px
       margin: 5px
       &.active
        color: white
    :nth-child(3)
      flex:1
      >a
        text-decoration:none
        color:rgba(255,255,255,.7)
        display: block
        flex:1
        padding: 10px
        margin: 5px
        &.active
          color: white

  .navbar-toggle
    float:left
    .icon-bar
      background:white

  @media (min-width: 768px)
    .navbar-toggle
      display: block;
</style>
