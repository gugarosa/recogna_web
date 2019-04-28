import Vue from 'vue'
import App from './App.vue'

// External packages and assets
import './packages'

// Set if environment is production-ready or not
Vue.config.productionTip = false

// Define a new Vue application
new Vue({
    render: h => h(App)
}).$mount('#app')
