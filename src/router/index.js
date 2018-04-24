import Vue from 'vue'
import Router from 'vue-router'

// 路由懒加载
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: _import('index'),
      meta: { title: '京东首页' }
    }
  ]
})
