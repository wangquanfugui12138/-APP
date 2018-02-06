import Vue from 'vue'
import App from './App'
import store from './store/store.js'
import router from './router/index.js'
import $ from 'jquery'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min.js'
import '../static/css/reset.css'
import axios from 'axios';
Vue.prototype.$http=axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
