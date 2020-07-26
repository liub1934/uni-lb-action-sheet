import Vue from 'vue'
import App from './App'
import './iconfont/iconfont.scss'
import './iconfont-weapp/iconfont-weapp-icon.css'
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
