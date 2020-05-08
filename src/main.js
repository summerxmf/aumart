import Vue from 'vue'
import App from './App'
import router from './router'
import store from 'store'
import Vuex from 'vuex'

import i18n from './i18n/i18n'


import 'assets/scss/index.scss'

// Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'



Vue.use(ElementUI)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
