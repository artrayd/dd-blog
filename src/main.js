import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './css/overrides.scss'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')

// Vue Analytics
import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {
  id: 'UA-123456780-00' 
})