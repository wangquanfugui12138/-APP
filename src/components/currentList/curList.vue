<template>
    <div class="curList" v-if="$store.state.cur">
      <div class="mask" @click="$store.state.cur=false"></div>
      <div class="content">
        <div class="ctrl">
          <div>
            <span class="glyphicon glyphicon-repeat"></span>
            <span>循环播放（{{$store.state.curList.length}}）</span>
          </div>
          <div>
            <span class="glyphicon glyphicon-plus-sign"></span>
            <span>收藏全部</span>
          </div>
          <div class="glyphicon glyphicon-trash" @click="removeAll"></div>
        </div>
        <div class="list">
          <div class="list_item" v-for="(value,key) in $store.state.curList">
            <div class="song_info" v-if="value!=undefined" @click="play(key)">
              <span v-if="$store.state.playIndex==key"  class="glyphicon glyphicon-volume-up"></span>
              <span>{{value.name}}</span>
              <span>-</span>
              <span>{{value.artists[0].name}}</span>
            </div>
            <div class="del">
              <div class="glyphicon glyphicon-remove" @click="remove(key)"></div>
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
       this.$store.state.playIndex=key;
       this.$store.state.isPlay=false;
     },
     remove(key){
       if(key<this.$store.state.playIndex){
         this.$store.state.playIndex-=1;
       }
       this.$store.state.curList.splice(key,1);
     },
     removeAll(){
       if(this.$store.state.curList!=''){
         this.$store.state.curList.splice(0,this.$store.state.curList.length);
         this.$store.state.curList=[];
       }
     }
   }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  .curList
    z-index:99
    position:fixed
    top:0
    bottom:50px
    width:100%
    overflow:hidden
    .content
      overflow:hidden
      padding:0 10px
      bottom:0
      width:100%
      height:60%
      background:black
      color:white
      .ctrl
        display:flex
        position:relative
        top:0
        height:45px
        width:100%
        border-bottom: 1px solid rgba(255,255,255,.1)
        >div
          font-size:14px
          line-height:45px
          flex:4
          >.glyphicon
            color:silver
        :nth-child(2)
          text-align:right
        .glyphicon-trash
          flex:1
          text-align:right
          color:silver
      .list
        width:120%
        height:100%
        overflow-x:hidden
        overflow-y:auto
        display:flex
        flex-wrap:wrap
        align-content:flex-start
        position:relative
        .list_item
          overflow:hidden
          position:relative
          height:45px
          width:100%
          border-bottom: 1px solid rgba(255,255,255,.1)
          display:flex
          >div
            line-height:45px
            font-size:14px
          :nth-child(1)
            flex:4
            font-size:14px
            >span
              padding-left:5px
              width: 150px
              white-space: nowrap
              overflow: hidden
              text-overflow: ellipsis
            :nth-child(3)
              font-size:12px
              color:silver
            :nth-child(4)
              font-size:12px
              color:silver
          .del
            flex:1

    .mask
      height:40%
      width:100%
      background:rgba(0,0,0,.7)
</style>
