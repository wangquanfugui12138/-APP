<template>
  <div class="video">
    <div class="content_wrapper">
      <div class="content"></div>
      <div class="info">
        <div class="title">周杰伦巡回演唱会精彩集锦</div>
        <div class="handle">
          <div class="up">
            <span class="glyphicon glyphicon-thumbs-up"></span>
            <span>999+</span>
          </div>
          <div class="comment">
            <span class="glyphicon glyphicon-comment"></span>
            <span>999+</span>
          </div>
          <div class="option">
            <span class="glyphicon glyphicon-option-vertical"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="content_wrapper">
      <div class="content"></div>
      <div class="info">
        <div class="title">周杰伦巡回演唱会精彩集锦</div>
        <div class="handle">
          <div class="up">
            <span class="glyphicon glyphicon-thumbs-up"></span>
            <span>999+</span>
          </div>
          <div class="comment">
            <span class="glyphicon glyphicon-comment"></span>
            <span>999+</span>
          </div>
          <div class="option">
            <span class="glyphicon glyphicon-option-vertical"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="content_wrapper">
      <div class="content"></div>
      <div class="info">
        <div class="title">周杰伦巡回演唱会精彩集锦</div>
        <div class="handle">
          <div class="up">
            <span class="glyphicon glyphicon-thumbs-up"></span>
            <span>999+</span>
          </div>
          <div class="comment">
            <span class="glyphicon glyphicon-comment"></span>
            <span>999+</span>
          </div>
          <div class="option">
            <span class="glyphicon glyphicon-option-vertical"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="content_wrapper">
      <div class="content"></div>
      <div class="info">
        <div class="title">周杰伦巡回演唱会精彩集锦</div>
        <div class="handle">
          <div class="up">
            <span class="glyphicon glyphicon-thumbs-up"></span>
            <span>999+</span>
          </div>
          <div class="comment">
            <span class="glyphicon glyphicon-comment"></span>
            <span>999+</span>
          </div>
          <div class="option">
            <span class="glyphicon glyphicon-option-vertical"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="es6">
  export default {}
</script>

<style lang="stylus" type="text/stylus" scoped>
  .video
    position:absolute
    top:80px
    bottom:50px
    overflow:hidden
    overflow-y:auto
    width:100%
    .content_wrapper
      width:100%
      height:300px
      .content
        width:100%
        height:230px
        background:url('../../assets/images/22.jpg') no-repeat
        background-size:100% 100%
      .info
        display:flex
        height:70px
        width:100%
        color:white
        .title
          flex:1
          overflow:hidden
          text-overflow:ellipsis
          padding: 20px 10px 20px 20px
          left:10px
          width:80%
          font-size:14px
        .handle
          text-align:center
          flex:1
          display:flex
          font-size:18px
          color:white
          >div
            text-align:center
            flex:1
            display:flex
            flex-direction: column
            >span
              height:50%
          .up
            :nth-child(1)
              line-height:50px
            :nth-child(2)
              padding:5px
              font-size:14px
              color:silver
          .comment
            :nth-child(1)
              line-height:50px
            :nth-child(2)
              padding:5px
              font-size:14px
              color:silver
          .option
            >span
              line-height:70px
</style>
