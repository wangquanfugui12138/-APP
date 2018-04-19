<template>
  <div class="footer">
    <div class="footer-item">
      <img :src="picUrl" alt="" v-if="$store.state.curList!=''"/>
    </div>
    <div class="footer-item">
      <div class="song_info"  v-if="$store.state.curList!=''">
        <span class="song">{{song}}</span>
        <span class="singer">{{singer}}</span>
      </div>
    </div>
    <div class="footer-item">
      <span class="glyphicon" v-if="$store.state.curList!=''"
            :class="{'glyphicon glyphicon-play':$store.state.isPlay==false,
            'glyphicon glyphicon-pause':$store.state.isPlay==true}" @click="play"></span>
      <audio ref="song" v-if="$store.state.playIndex>=0" :src="returnUrl"></audio>
    </div>
    <div class="footer-item">
      <span class="glyphicon glyphicon-list" @click="$store.state.cur = !$store.state.cur"></span>
    </div>
  </div>
</template>

<script type="es6">
  import store from '../../store/store.js'

  export  default {
    data(){
      return {
        url: 'http://music.163.com/song/media/outer/url?id='
      }
    },
    methods:{
      play(){
        if(!this.$store.state.isPlay){
          this.$refs.song.play();
          this.$store.state.isPlay=true;
        }
        else{
          this.$refs.song.pause();
          this.$store.state.isPlay=false;
        }
      }
    },
    computed: {
      returnUrl(){
        return this.url + this.$store.state.curList[this.$store.state.playIndex].id + '.mp3'
      },
      picUrl(){
        if(this.$store.state.playIndex>=0)
          return this.$store.state.curList[this.$store.state.playIndex].album.picUrl;
        else
          return this.$store.state.curList[0].album.picUrl;
      },
      song(){
        if(this.$store.state.playIndex>=0)
          return this.$store.state.curList[this.$store.state.playIndex].name;
        else
          return this.$store.state.curList[0].name;
      },
      singer(){
        if(this.$store.state.playIndex>=0)
          return this.$store.state.curList[this.$store.state.playIndex].artists[0].name;
        else
          return this.$store.state.curList[0].artists[0].name;
      }
    }
  }
</script>
<style lang="stylus" type="text/stylus" scoped>
  .footer
    overflow:hidden
    z-index:10
    display:flex
    position: fixed
    width:100%
    bottom: 0
    height: 50px
    font-size:18px
    color:white
    background:rgba(6,2,2,.6)
    >div
      font-size:25px
    :nth-child(1)
      flex: 1
      img
        margin:5px
        width:40px
        height:40px
    :nth-child(2)
      flex:3
      .song_info
        padding:10px 5px
        width:150px
        height:100%
        > span
          height:15px
          margin-bottom:4px
          display: block
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis
        :nth-child(1)
          font-size:14px
          color:white
        :nth-child(2)
          font-size:10px
          color:rgba(241, 235, 235, .7)
    :nth-child(3)
      flex:1
      >span
       display: block
       float: left
       padding: 10px 15px
    :nth-child(4)
      flex: 1
      >span
        display: block
        float: left
        padding: 10px 15px
</style>
