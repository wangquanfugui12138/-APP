import Vue from 'vue'
import Router from 'vue-router'
import list from '../components/content/list.vue'
import more from '../components/content/more.vue'
import news from '../components/content/news.vue'
import video from '../components/more_detail/video.vue'
import radio from '../components/more_detail/radio.vue'
import music from '../components/more_detail/music.vue'
import search from  '../components/search/search.vue'
import store from '../store/store.js'

Vue.use(Router);

const routes= new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name:list,
      redirect: '/list'
    },
    {
      path:'/more',
      redirect:'/more/music'
    },
    {
      path: '/list',
      component: list
    },
    {
      path: '/more',
      component: more,
      children:[
        {path:'/more/music',name:'music',component:music},
        {path:'/more/video',component:video},
        {path:'/more/radio',name:'radio',component:radio}
      ]
    },
    {
      path: '/news',
      component: news
    },
    {
      path: '/search',
      component: search
    }
  ]
});
/*

routes.beforeEach((to, from, next) => {

  next();
});
*/

export default routes
