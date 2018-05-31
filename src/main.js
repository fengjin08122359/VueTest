// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import promise from 'es6-promise'
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api'
import config from './config'
import ncheader from './components/ncheader'
import ncmenu from './components/ncmenu'
import backcol from './components/backcol'
import h5preview from './components/h5preview'
import pcpreview from './components/pcpreview'
import ElementUI from 'element-ui'
import VueWechatTitle from 'vue-wechat-title'
import vueUploadComponent from 'vue-upload-component'
import ncselectTree from './components/ncselectTree'
import VueSwiper2 from './components/swiper'
import FileUpload from './components/fileupload'
import VueTinymce from './components/VueTinymce'
import SimpleVueValidator from 'simple-vue-validator'
import './style/normalize.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/dist/idangerous.swiper.js'
import 'swiper/dist/idangerous.swiper.css'
import 'tinymce/tinymce.js'
import 'tinymce/themes/modern/theme.js'
import 'tinymce/skins/lightgray/skin.min.css'

promise.polyfill()
Vue.prototype.$ajax = api
Vue.prototype.$config = config
Vue.use(ncheader)
Vue.use(VueWechatTitle)
Vue.use(ElementUI)
Vue.use(ncselectTree)
Vue.use(vueUploadComponent)
Vue.use(backcol)
Vue.use(VueSwiper2)
Vue.use(FileUpload)
Vue.use(ncmenu)
Vue.use(pcpreview)
Vue.use(h5preview)
Vue.use(VueTinymce)
Vue.use(SimpleVueValidator)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
