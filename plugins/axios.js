import { Message, Loading } from 'element-ui'
import { getToken } from "~/plugins/auth";

export default function({ $axios, redirect,store }) {

  // 基本配置
  $axios.defaults.timeout = 10000
  $axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  $axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded'
  $axios.defaults.headers.delete['Content-Type'] = 'application/x-www-form-urlencoded'

  $axios.onRequest(config => {
    if (store.state.token) {
      config.headers['Authorization'] = store.state.token;
    }
  })

  $axios.onResponse(response => {
    const res = response.data
  })

  $axios.onError(error => {
    // loadingInstance.close()
    console.log('error --->' + error)
    const code = parseInt(error.response && error.response.status)
  })

  $axios.onRequestError(err => {
    console.log('onRequestError --->' + err)
  })
  $axios.onResponseError(err => {
    console.log('onResponseError --->' + err)
  })
}


