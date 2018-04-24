import axios from 'axios'
import Vue from 'vue'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_URL, // api的base_url，配置位置在config/dev.env.js
  timeout: 600000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // 客户端类型
  return config
}, error => {
  Vue.$vux.toast.show({
    type: 'text',
    text: '网络不给力'
  })
  // store.commit('updateLoadingStatus', {isLoading: false})
  return Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(
  response => {
    if (!response.data.success) {
      Vue.$vux.toast.show({
        type: 'text',
        text: response.data.message
      })
    }
    return response
  },
  error => {
    Vue.$vux.toast.show({
      type: 'text',
      text: '网络不给力'
    })
    console.log(JSON.stringify(error))
    return Promise.reject(error)
  }
)

export default service
