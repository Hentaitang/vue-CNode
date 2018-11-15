// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import util from '@/helpers/util'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.changeTime = util.changeTime
Vue.prototype.tabChange = util.tabChange
Vue.prototype.needChange = util.needChange

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
