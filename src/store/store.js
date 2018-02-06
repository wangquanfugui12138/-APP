/**
 * Created by admin on 2018/2/1.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    user:{
      nick:"Jay'Z",
      level:10,
      sign:false
    },
    playList:false,
    side:false,
    search:false,
    cur:false,
    isPlay:false,
    listType:[],
    recommendList:[],
    mySongList:[],
    sea_result:[],
    curList:[],
    selectIndex:-1,
    playIndex:-1
  }
});
