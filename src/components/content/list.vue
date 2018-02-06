<template>
  <div class="list">
    <div class="ctrl">
      <div class="ctrl-item">
        <span class="glyphicon glyphicon-download-alt"></span>
        <span class="text">下载管理</span>
      </div>
      <div class="ctrl-item">
        <span class="glyphicon glyphicon-th-list"></span>
        <span class="text">最近播放</span>
      </div>
      <div class="ctrl-item">
        <span class="glyphicon glyphicon-headphones"></span>
        <span class="text">我的电台</span>
      </div>
      <div class="ctrl-item">
        <span class="glyphicon glyphicon-heart"></span>
        <span class="text">我的收藏</span>
      </div>
    </div>
    <div class="song_list" @click="toggle=!toggle">
      <span class="glyphicon" :class="{'glyphicon-menu-down':toggle==true,'glyphicon-menu-right':toggle==false}"></span>
      <span>创建的歌单</span>
      <span class="glyphicon glyphicon-cog"></span>
    </div>
    <transition name="Y-fade">
      <div v-if="toggle" class="detail_song_list">
        <div class="detail-item" @click="$store.state.playList=true,$store.state.listType=$store.state.mySongList">
          <div class="left">
            <div class="img">
              <img :src="$store.state.mySongList.coverImgUrl" width="39" height="39" alt=""/>
            </div>
            <div class="info">
              <p>{{$store.state.mySongList.name}}</p>
              <p>{{$store.state.mySongList.trackCount}}首</p>
            </div>
          </div>
          <div class="right">
            <div class="glyphicon glyphicon-option-vertical"></div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="es6">
  export default {
    data(){
      return {
        toggle: true
      }
    },
    methods: {
      geiMyList(){
        this.$http({
          method: 'get',
          url: '/music/api/playlist/detail?id=2039098272'
        }).then((res)=> {
          this.$store.state.mySongList = res.data.result;
        }).catch(function (err) {
          console.log(err)
        })
      }
    },
    mounted(){
      this.geiMyList()
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .ctrl
    position:absolute
    top:50px
    width:100%
    color:white
    background:transparent
    .ctrl-item
      width:100%
      height:45px
      padding:10px 15px 20px 15px
      border-bottom: 1px solid rgba(255,255,255,.1)
      >span
        float:left
        display:inline-block
      .glyphicon
        font-size:20px
        margin-right:16px
      .text
        font-size:14px
        padding-top:5px
    :last-child
      border-bottom:none

  .song_list
    position:absolute
    top: 230px
    width:100%
    height:30px
    color:white
    line-height:30px
    font-size:13px
    background:rgba(6,2,2,.6)
    >span
      position:relative
      display:block
    :nth-child(1)
      float:left
      left:15px
      line-height:30px
    :nth-child(2)
      float:left
      margin:2px 0 0 20px
    :nth-child(3)
      z-index:1
      float:right
      right:15px
      line-height:30px

  .detail_song_list
    position:absolute
    top:260px
    bottom:50px
    overflow-x:hidden
    overflow-y:auto
    width:100%
    color:white
    font-size:16px
    .detail-item
      display:flex
      width:100%
      height:45px
      padding:3px
      border-bottom: 1px solid rgba(255,255,255,.1)
      .left
        flex:15
        display:flex
        .img
          flex:.1
        .info
          flex:5
          >p
            padding:3px 0
            display:block
          :nth-child(1)
            font-size:14px
            color:white
            white-space: nowrap
            overflow:hidden
            text-overflow:ellipsis
          :nth-child(2)
            margin-left:5px
            font-size:12px
            color:white
      .right
        flex:1
        line-height:45px
    :last-child
      border-bottom:none
</style>
