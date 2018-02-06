<template>
  <div class="news">
    <div class="news_item">
      <div class="info">
        <div class="per_img"></div>
        <div class="intro">
          <div class="nick">Jay&nbsp;
          <span>分享单曲：</span>
          </div>
          <div class="time">08:38</div>
        </div>
      </div>
      <div class="content">
        <div class="text"><span>#早安世界#</span> 嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻</div>
        <div class="song">
          <div class="song_img"></div>
          <div class="song_info">
            <div class="song_name">花海</div>
            <div class="singer">周杰伦</div>
          </div>
        </div>
      </div>
      <div class="handle">
        <div class="up">
          <span class="glyphicon glyphicon-thumbs-up"></span>
          <span>2491</span>
        </div>
        <div class="comment">
          <span class="glyphicon glyphicon-comment"></span>
          <span>1026</span>
        </div>
        <div class="share">
          <span class="glyphicon glyphicon-paperclip"></span>
          <span>1262</span>
        </div>
        <div class="option">
          <span class="glyphicon glyphicon-option-vertical"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="es6">
  export default {}
</script>

<style lang="stylus" type="text/stylus" scoped>
  .news
    position:absolute
    top:50px
    bottom:50px
    overflow:hidden
    overflow-y:auto
    width:100%
    color:white
    background: rgba(6,2,2,0.4)
    .news_item
      width:100%
      height:auto
      border-bottom: 1px solid rgba(255,255,255,.1)
      padding:20px 0
      .info
        padding:0 10px
        width:100%
        height:50px
        .per_img
          float:left
          width:40px
          height:40px
          border-radius:50%
          background:url('../../assets/images/44.jpg') no-repeat
          background-size:100% 100%
        .intro
          height:40px
          padding: 4px 0 0 10px
          display:flex
          flex-wrap:wrap
          align-content:flex-start
          >div
            height:50%
            width:100%
            line-height:18px
          .nick
            font-size:14px
            color:#8ac8f5
            >span
              font-size:14px
              color:white
          .time
            font-size:12px
            color:silver
    .content
      width:100%
      height:auto
      padding-left:60px
      >div
        height:auto
        margin:10px 15px 10px 0
        font-size:14px
      .text
        >span
          color:#8ac8f5
      .song
        background:rgba(255,255,255,0.1)
        height:50px
        padding:5px
        .song_img
          float:left
          padding:10px
          width:40px
          height:40px
          background:url('../../assets/images/66.jpg') no-repeat
        .song_info
          height:40px
          padding: 4px 0 0 10px
          display:flex
          flex-wrap:wrap
          align-content:flex-start
          >div
            height:50%
            width:100%
            line-height:18px
          .song_name
            font-size:14px
            color:white
          .singer
            font-size:12px
            color:silver
    .handle
      position:relative
      padding-left:60px
      bottom:0
      height:40px
      display:flex
      font-size:14px
      color:white
      :nth-child(4)
        text-indent:12%
      >div
        line-height:40px
        flex:1
        :nth-child(2)
          font-size:12px
          color:silver
</style>
