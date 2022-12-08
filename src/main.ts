import { createApp } from 'vue'

import App from './App.vue'
import drag from "v-drag"
import './index.css'
import './main.css'

const app = createApp(App)

app.use(drag).mount('#app')