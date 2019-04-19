import Vue from 'vue'
import './plugins/vuetify'
import VeeValidate from 'vee-validate'
import Datetime from 'vue-datetime'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vue-datetime/dist/vue-datetime.css'

Vue.use(Datetime)
Vue.use(VeeValidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
