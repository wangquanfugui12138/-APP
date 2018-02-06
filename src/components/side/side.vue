<template>
    <div v-if="$store.state.side" class="side">
      <div class="userInfo">
        <div class="bg"></div>
        <div class="userInfo_content">
          <div class="data">
            <div class="img"></div>
            <div class="info">
              <div class="nick">{{$store.state.user.nick}}</div>
              <div class="level"><i>lv.{{$store.state.user.level}}</i></div>
              <div class="sign" @click="$store.state.user.sign=true">
                <span v-if="$store.state.user.sign">已签</span>
                <span v-else>签到</span>
                <span class="glyphicon glyphicon-chevron-right"></span>
              </div>
            </div>
          </div>
          <div class="function">
            <div class="content">
              <div class="content_item">
                <span class="glyphicon glyphicon-envelope"></span>
                  <span>我的消息</span>
              </div>
              <div class="content_item">
                <span class="glyphicon glyphicon-shopping-cart"></span>
                <span>商城</span>
              </div>
              <div class="content_item">
                <span class="glyphicon glyphicon-king"></span>
                <span>VIP会员</span>
              </div>
              <div class="content_item">
                <span class="glyphicon glyphicon-calendar"></span>
                <span>在线听歌免流量</span>
              </div>
            </div>
            <div class="content">
              <div class="content_item">
                <span class="glyphicon glyphicon-user"></span>
                <span>我的好友</span>
              </div>
              <div class="content_item">
                <span class="glyphicon glyphicon-map-marker"></span>
                <span>附近的人</span>
              </div>
            </div>
            <div class="content">
              <div class="content_item">
                <span class="glyphicon glyphicon-erase"></span>
                <span>个性换肤</span>
              </div>
              <div class="content_item">
                <span class="glyphicon glyphicon-time"></span>
                <span>定时播放</span>
              </div>
              <div class="content_item">
                <span class="glyphicon glyphicon-cloud"></span>
                <span>音乐云盘</span>
              </div>
            </div>
          </div>
          <div class="set">
            <div class="n/d">
              <span class="glyphicon glyphicon-certificate"></span>
              <span>夜间模式</span>
            </div>
            <div class="control">
              <span class="glyphicon glyphicon-cog"></span>
              <span>设置</span>
            </div>
            <div class="logout">
              <span class="glyphicon glyphicon-off"></span>
              <span>退出</span>
            </div>
          </div>
        </div>
      </div>
      <div class="mask" @click="$store.state.side=false"></div>
    </div>
</template>

<script type="es6">
  import store from '../../store/store.js'

  export default {}
</script>

<style lang="stylus" type="text/stylus" scoped>
  .side
    z-index:99
    position:fixed
    width:100%
    height:100%
    display:flex
    .userInfo
      width:80%
      height:100%
      .userInfo_content
        width:100%
        height:100%
        background:rgba(0,0,0,.3)
        .data
          height:160px
          width:100%
          padding: 50px 0 0 10px
          .img
            width:60px
            height:60px
            border-radius:50%
            background:url('../../assets/images/66.jpg') no-repeat
            background-size:100% 100%
          .info
            height:40px
            width:100%
            color:white
            padding:10px
            >div
              display:block
              float:left
              text-align:center
              line-height:18px
            .nick
              font-size:14px
              top:125px
              position:absolute
              width:40px
              height:20px
            .level
              font-size:10px
              line-height:15px
              top:125px
              position:absolute
              left:70px
              height:15px
              width:35px
              border:1px solid white
              border-radius:10px
            .sign
              font-size:12px
              height:20px
              width:50px
              border:1px solid white
              border-radius:10px
              position:relative
              float:right
              >span
                position:relative
                text-align:center
    .function
      position:absolute
      overflow:hidden
      overflow-y:auto
      top:160px
      bottom:50px
      width:80%
      .content
        width:100%
        height:auto
        display:flex
        flex-wrap:wrap
        align-content:flex-start
        margin-bottom:10px
        .content_item
          height:40px
          line-height:40px
          padding-left:10px
          width:100%
          background:rgba(255,255,255,.1)
          font-size:14px
          :nth-child(1)
            color:rgba(255,255,255,.6)
            margin-right:5px
          :nth-child(2)
            color:white
      :last-child
        margin-bottom:0
    .set
      position:fixed
      bottom:0
      width:80%
      height:50px
      display:flex
      >div
        color:white
        font-size:14px
        flex:1
        line-height:50px
        text-align:center

    .mask
      width:20%
      height:100%
      background:rgba(0,0,0,.7)


  input[type='file']
    z-index:100
    position:relative
    visibility: hidden
</style>
