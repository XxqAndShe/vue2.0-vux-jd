// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import store from './store'
import App from './App'
import { parseTime } from './utils'

// 数据模拟
// import './mock'
// 图片懒加载
import Vuelazyload from 'vue-lazyload'
// svg
import IconSvg from './components/icon-svg.vue'

// vux components
// vux plugins
import { Group, Cell, BusPlugin, DatetimePlugin, ToastPlugin, AlertPlugin, WechatPlugin, ConfirmPlugin } from 'vux'

if (window.top !== window.self) {
  window.location.href = 'about:blank'
  window.top.location.href = 'about:blank'
}

// 注册组件
Vue.component('icon-svg', IconSvg)
Vue.component('group', Group)
Vue.component('cell', Cell)
Vue.use(Vuelazyload, {
  error: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
})
Vue.use(require('vue-wechat-title'))
// vux插件
Vue.use(BusPlugin)
Vue.use(DatetimePlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(WechatPlugin)
Vue.use(ConfirmPlugin)

// filters
Vue.filter('remobile', function (mobile) {
  return mobile.replace(/^(\d{3})\d{5}(\d{3})$/, '$1*****$2')
})
Vue.filter('parseTime', function (time, format) {
  return parseTime(time, format)
})

/**
 * 路由钩子 beforeEach
 */
router.beforeEach((to, from, next) => {
  next()
})
/**
 * 路由钩子 afterEach
 */
router.afterEach(to => {
  // console.log(1)
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
