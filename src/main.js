import { createApp } from 'vue'
import './assets/styles/tailwind.css'
import App from './App.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { createPinia } from 'pinia'
import closableDirective from './plugins/closable.directive.js'

library.add(fas);
const pinia = createPinia()

createApp(App)
  .use(pinia)
  .directive('closable', closableDirective(true))
  .component("fa", FontAwesomeIcon)
  .mount('#app')
