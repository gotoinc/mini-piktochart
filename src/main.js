import { createApp } from 'vue'

import App from './App.vue'
import drag from 'v-drag'
import './assets/index.css'
import './assets/main.css'

const app = createApp(App)

app.use(drag).mount('#app')
