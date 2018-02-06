<template>
    <div v-if="$store.state.playList" class="playList">
      <div class="bg_wrapper">
        <div class="bg"></div>
      </div>
      <div class="list_info">
        <div class="ctrl">
          <div class="glyphicon glyphicon-arrow-left">
            <div @click="$store.state.playList=false"></div>
            <span>歌单</span>
          </div>
          <router-link to="/search" class="glyphicon glyphicon-search"></router-link>
          <div class="glyphicon glyphicon-option-vertical"></div>
        </div>
        <div class="info">
          <div class="left">
            <img :src="$store.state.listType.coverImgUrl" width="100" height="100" alt=""/>
          </div>
          <div class="right">
            <div class="name">{{$store.state.listType.name}}</div>
            <div class="data">
              <div class="img">
                <img src="../../assets/images/66.jpg" width="30" height="30" alt=""/>
              </div>
              <div class="nick">{{$store.state.user.nick}}</div>
              <div class="glyphicon glyphicon-menu-right"></div>
            </div>
          </div>
        </div>
        <div class="handle">
          <div class="handle_item">
            <div class="glyphicon glyphicon-plus-sign"></div>
            <div>收藏</div>
          </div>
          <div class="handle_item">
            <div class="glyphicon glyphicon-comment"></div>
            <div>评论</div>
          </div>
          <div class="handle_item">
            <div class="glyphicon glyphicon-link"></div>
            <div>分享</div>
          </div>
          <div class="handle_item">
            <div class="glyphicon glyphicon-download-alt"></div>
            <div>下载</div>
          </div>
        </div>
      </div>
      <div class="list_content">
        <div class="list_ctrl"></div>
        <div class="list_content_item" v-for="(value,key) in $store.state.listType.tracks">
          <div class="song_info" v-if="value!=undefined" @click="play(key)">
            <div class="song_info_left">
              <span v-if="$store.state.selectIndex==key"  class="glyphicon glyphicon-volume-up"></span>
              <span v-else style="font-size: 14px">{{key+1}}</span>
            </div>
            <div class="song_info_mid">
              <div class="top">
                <span>{{value.name}}</span>
              </div>
              <div class="bottom">
                <span>{{value.artists[0].name}}</span>
                <span>-</span>
                <span>{{value.album.name}}</span>
              </div>
            </div>
            <div class="song_info_right">
              <div class="glyphicon glyphicon-option-vertical"></div>
            </div>
          </div>
      </div>
      </div>
    </div>
</template>

<script type="es6">
  import store from '../../store/store.js'

  export default {
    methods:{
      play(key){
        var num=0;
        this.$store.state.isPlay=false;
        this.$store.state.selectIndex=key;
        this.$store.state.playIndex=0;
        for(var i=0;i<this.$store.state.curList.length;i++){
          if(this.$store.state.curList[i].id==this.$store.state.listType.tracks[key].id){
            num++;
            this.$store.state.playIndex=i;
          }
        }
        if(num==0)
          this.$store.state.curList.unshift(this.$store.state.listType.tracks[key]);
      }
    }
  }

</script>

<style lang="stylus" type="text/stylus" scoped>
  .playList
    z-index:21
    position:fixed
    bottom:50px
    width:100%
    height:100%
    overflow:hidden
    .list_info
      position:fixed
      top:0
      width:100%
      height:200px
      background:rgba(0,0,0,.6)
      .ctrl
        position:fixed
        top:0
        width:100%
        height:50px
        display:flex
        >div
          line-height:50px
          height:100%
          font-size:16px
        .glyphicon-arrow-left
          flex:10
          padding-left:10px
          color:white
          >div
            position:absolute
            width:25px
            height:25px
            top:13px
          >span
           margin-left:10px
        .glyphicon-search
          text-decoration:none
          color:white
          flex:1
          line-height:50px
          height:100%
          font-size:16px
        .glyphicon-option-vertical
          flex:1
          color:white
      .info
        position:fixed
        top:50px
        width:100%
        height:100px
        display:flex
        color:white
        .left
          flex:.1
          padding-left:20px
        .right
          display:flex
          flex-wrap:wrap
          align-content:flex-start
          padding-left:10px
          >div
            width:60%
            height:50%
          .name
            line-height:50px
            font-size:14px
            white-space: nowrap
            overflow:hidden
            text-overflow:ellipsis
          .data
            display:flex
            >div
              flex:1
              line-height:30px
              >img
                border-radius:50%
            .nick
              flex:1.5
              font-size:12px
              text-align:right
            .glyphicon-menu-right
              flex:3
              font-size:8px
      .handle
        position:fixed
        top:150px
        width:100%
        height:50px
        line-height:50px
        display:flex
        color:white
        >div
          flex:1
          font-size:14px
          text-align:center
          display:flex
          flex-wrap:wrap
          align-content:flex-start
          >div
            opacity:.8
            width:100%
            height:50%
          :nth-child(1)
            color:silver
            line-height:25px
          :nth-child(2)
            color:white
            line-height:10px
    .list_content
      background:rgba(0,0,0,.2)
      width:120%
      top:200px
      bottom:50px
      overflow-x:hidden
      overflow-y:auto
      display:flex
      flex-wrap:wrap
      align-content:flex-start
      position:fixed
      .list_content_item
        overflow:hidden
        position:relative
        height:50px
        width:100%
        border-bottom: 1px solid rgba(255,255,255,.1)
        display:flex
        color:white
        >div
          width:100%
          font-size:14px
          display:flex
          .song_info_left
            flex:.5
            font-size:20px
            line-height:50px
            text-align:center
          .song_info_mid
            flex:3
            display:flex
            flex-wrap:wrap
            align-content:flex-start
            >div
              width:100%
              height:50%
              >span
                display: block
                width: 200px
                white-space: nowrap
                overflow: hidden
                text-overflow: ellipsis
            .top
              line-height:40px
              font-size:14px
            .bottom
              color:silver
              font-size:12px
              line-height:25px
          .song_info_right
            flex:1
            line-height:50px
</style>
