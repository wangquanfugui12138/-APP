<template>
    <div class="search_wrapper">
      <div class="bg_wrapper">
        <div class="bg"></div>
      </div>
      <div class="search">
        <label for="kw" class="glyphicon glyphicon-arrow-left" @click="back"></label>
        <input type="text" id="kw" v-model="kw"/>
      </div>
      <div class="content" v-if="$store.state.sea_result!=''">
        <div class="content_item" v-for="(item,index) in $store.state.sea_result" @click="play(index)">
          <div class="left">
            <div class="name">{{item.name}}</div>
            <div class="info">
              <div class="singer">{{item.artists[0].name}}</div>
              <div>-</div>
              <div class="album">{{item.album.name}}</div>
            </div>
          </div>
          <div class="right">
            <div class="glyphicon glyphicon-option-vertical"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="es6">
  import store from '../../store/store.js'

  export default {
    data(){
      return {
        kw: ''
      }
    },
    methods: {
      back(){
        this.$router.go(-1);
      },
      play(index){
        var num=0;
        this.$store.state.playIndex=0;
        this.$store.state.isPlay=false;
        for(var i=0;i<this.$store.state.curList.length;i++){
          if(this.$store.state.curList[i].id==this.$store.state.sea_result[index].id){
            num++;
          }
        }
        if(num==0)
          this.$store.state.curList.unshift(this.$store.state.sea_result[index]);
      }
    },
    watch: {
      kw(){
        if (this.kw != ' ' || this.kw != undefined) {
          this.$http({
            method: 'get',
            url: '/s_music/search/get/?limit=100&type=1&s=' + this.kw
          }).then((res)=> {
            this.$store.state.sea_result = res.data.result.songs;
          }).catch(function (err) {
            console.log(err)
          })
        }
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  .search_wrapper
    z-index:31
    position:fixed
    width:100%
    height:100%
    overflow:hidden
    .search
      padding:15px 10px
      position:fixed
      height:50px
      width:100%
      background:rgba(6,2,2,.6)
      color:white
      display:flex
      >label
        flex:1
        margin-right:15px
        font-weight:bold
        line-height:20px
      >input
        font-size:14px
        flex:20
        background:transparent
        border:none
        border-bottom: 1px solid rgba(255,255,255,.5)
        outline: none
    .content
      width:120%
      position: fixed
      top: 50px
      bottom:0
      color: white
      font-size: 14px
      overflow-x:hidden
      overflow-y:auto
      display:flex
      flex-wrap:wrap
      align-content:flex-start
      .content_item
        padding-left:10px
        width:100%
        height:50px
        border-bottom: 1px solid rgba(255,255,255,.1)
        display:flex
        .left
          display:flex
          flex-wrap:wrap
          align-content:flex-start
          line-height:25px
          height:100%
          flex:3
          >div
            width:100%
            height:50%
          .name
            white-space: nowrap
            overflow:hidden
            text-overflow:ellipsis
          .info
            padding-right:10px
            color:silver
            font-size:12px
            >div
              float:left
            :nth-child(2)
              margin:0 6px
            .album
              float:none
              white-space: nowrap
              overflow:hidden
              text-overflow:ellipsis
        .right
          line-height:50px
          height:100%
          flex:1
</style>
