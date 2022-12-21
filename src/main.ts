import { createApp } from 'vue'

import App from './App.vue'
import drag from 'v-drag'
import toast from './toast'

import './assets/index.css'
import './assets/main.css'

const app = createApp(App)

/*
  TODO
   CODE
     - Rewrite project to TypeScript, there must be no "*.js" files
   FEATURES / IMPROVEMENTS / BUGS
     - Fix bug: layers in canvas
     - Fix bug: when deleting item from canvas others must not change their location
     - Fix bug: after refresh items should save their location
*/

app.use(drag).use(toast).mount('#app')
