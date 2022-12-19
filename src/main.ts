import { createApp } from 'vue'

import App from './App.vue'
import drag from 'v-drag'
import './index.css'
import './main.css'

const app = createApp(App)

/*
  TODO
   CODE
     - Replace vue-cli with vite https://vitejs.dev/
     - Make folder "assets" and move "img" and styles there
     - Rewrite project to TypeScript, there must be no "*.js" files
   FEATURES / IMPROVEMENTS / BUGS
     - Fix bug: layers in canvas
     - Fix bug: "jumping" borders when item on canvas is selected
     - Fix bug: when deleting item from canvas others must not change their location
     - Fix bug: after refresh items should save their location
     - Fix bug: text item selection area is too big
     - Improvement: Restrict NOT image uploading
     - Improvement: show selection area always when interacting with item
     - Feature: new images should always appear in left top corner
     - Feature: add item deletion on "Delete" button
     - Feature: add button "Clear canvas"
*/

app.use(drag).mount('#app')
