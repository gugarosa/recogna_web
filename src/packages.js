import Vue from 'vue'
import Collapse from 'bootstrap-vue'
import Scrollspy from 'vue2-scrollspy'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Assets (.css, .scss or .js) to be imported
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/_main.scss'

// Adding to FA's library
library.add(fal)

// Instanciating components
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Using components
Vue.use(Collapse)
Vue.use(Scrollspy)