import Vue from 'vue'
import './plugins/axios'
import App from './Index.vue'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
// import Vuetify from 'vuetify'

import router from './router'

import 'vuetify/dist/vuetify.min.css'
// import 'vuetify/src/stylus/app.sty1'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(BootstrapVue);
// Vue.use(Vuetify)
// Vue.use(axios);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#index')
