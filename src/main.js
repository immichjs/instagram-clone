import Vue from 'vue'
import App from './App.vue'
import title from './assets/mixins/title'

import 'tailwindcss/tailwind.css'
import './assets/css/index.css'

Vue.mixin(title)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
