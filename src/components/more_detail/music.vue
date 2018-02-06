<template>
  <div class="music">
    <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="2000">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
        <li data-target="#myCarousel" data-slide-to="4"></li>
      </ol>
      <div class="carousel-inner">
        <div class="item active">
          <img src="../../assets/images/11.jpg" alt="">
        </div>
        <div class="item">
          <img src="../../assets/images/22.jpg" alt="">
        </div>
        <div class="item">
          <img src="../../assets/images/33.jpg" alt="">
        </div>
        <div class="item">
          <img src="../../assets/images/44.jpg" alt="">
        </div>
        <div class="item">
          <img src="../../assets/images/55.jpg" alt="">
        </div>
      </div>
      <a class="carousel-control left" href="#myCarousel"
         data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
      </a>
      <a class="carousel-control right" href="#myCarousel"
         data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
      </a>
    </div>
    <div class="ctrl">
      <div class="ctrl_item">
          <span class="glyphicon glyphicon-cd"></span>
          <span>私人FM</span>
      </div>
      <div class="ctrl_item">
        <span class="glyphicon glyphicon-gift"></span>
        <span>每日推荐</span>
      </div>
      <div class="ctrl_item">
        <span class="glyphicon glyphicon-fire"></span>
        <span>热门歌单</span>
      </div>
      <div class="ctrl_item">
        <span class="glyphicon glyphicon-stats"></span>
        <span>排行榜</span>
      </div>
    </div>
    <div class="music_content">
      <div class="title">
        <div class="hr"></div>
        <span>推荐歌单</span>
        <span class="glyphicon glyphicon-menu-right"></span>
      </div>
      <div class="content">
        <div class="list_content">
          <div class="list_content_item" v-for="(value,key) in $store.state.recommendList" @click="detail(key)">
            <img :src="value.coverImgUrl" alt=""/>
            <span class="content_title">{{value.name}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="music_content">
      <div class="title">
        <div class="hr"></div>
        <span>独家放送</span>
        <span class="glyphicon glyphicon-menu-right"></span>
      </div>
      <div class="content">
        <div class="solo_content">
          <div class="solo_content_item">
            <span class="content_title">那些年听过的周杰伦</span>
          </div>
          <div class="solo_content_item">
            <span class="content_title">那些年听过的周杰伦</span>
          </div>
          <div class="solo_content_item">
            <span class="content_title">那些年听过的周杰伦</span>
          </div>
        </div>
      </div>
    </div>
    <div class="music_content">
      <div class="title">
        <div class="hr"></div>
        <span>最新音乐</span>
        <span class="glyphicon glyphicon-menu-right"></span>
      </div>
      <div class="content"></div>
    </div>
    <div class="music_content">
      <div class="title">
        <div class="hr"></div>
        <span>推荐MV</span>
        <span class="glyphicon glyphicon-menu-right"></span>
      </div>
      <div class="content"></div>
    </div>
  </div>
</template>

<script type="es6">
  import store from '../../store/store.js'

  export default{
    data(){
      return{
        listId:['2039098272','582567376','2047424322','2009145567','974074327','911642235']
      }
    },
    methods: {
      detail(key){
        this.$store.state.playList=true;
        this.$store.state.listType=this.$store.state.recommendList[key];
      },
      getRecommendList(){
        this.$store.state.selectIndex=-1;
        for(var i=0;i<6;i++){
          this.$http({
          method: 'get',
          url: '/music/api/playlist/detail?id='+this.listId[i]
        }).then((res)=> {
          this.$store.state.recommendList.push(res.data.result);
        }).catch(function (err) {
          console.log(err)
        })
        }
      }
    },
    mounted(){
      this.getRecommendList()
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  .music
    background: rgba(6,2,2,0.2)
    position:absolute
    top:80px
    bottom:50px
    overflow:hidden
    overflow-y:auto
    width:100%
    #myCarousel
      .carousel-inner
        >div
          height:150px
          width:100%
          >img
            position:relative
            height:100%
            width:100%
    .ctrl
      position:relative
      top:0
      height:80px
      width:100%
      display:flex
      border-bottom: 1px solid rgba(255,255,255,.1)
      .ctrl_item
        flex:1
        >span
          position:relative
          top:40%
          left:50%
          transform:translate(-50%,-50%)
          display:block
          text-align:center
        :nth-child(1)
          color:rgb(176, 188, 216)
          font-size:30px
        :nth-child(2)
          color:white
          font-size:14px
    .music_content
      height:350px
      width:100%
      margin-bottom:30px
      .title
        padding:20px 0
        color:white
        font-size:16px
        .hr
          float:left
          margin:2px 4px 0 0
          height:15px
          width:2px
          background:rgb(176, 188, 216)
        :nth-child(3)
          margin-left:15px
          font-size:14px
      .content
        height:100%
        width:100%
        color:white
        font-size:14px
        .list_content
          height:100%
          width:100%
          display:flex
          flex-wrap:wrap
          align-content:flex-start
          .list_content_item
            width:33.3333%
            height:45%
            >img
              position:relative
              height:60%
              width:100%
            .content_title
              height:33px
              padding:5px
              display: -webkit-box
              -webkit-box-orient: vertical
              -webkit-line-clamp: 2
              overflow: hidden
        .solo_content
          height:100%
          width:100%
          display:flex
          flex-wrap:wrap
          align-content:flex-start
          .solo_content_item
            width:50%
            height:45%
            background:url('../../assets/images/55.jpg') no-repeat
            background-size:100% 60%
            .content_title
              overflow:hidden
              text-overflow:ellipsis
              position:relative
              display:block
              top:65%
              left:10px
              width:80%
          :nth-child(3)
            width:100%
</style>
