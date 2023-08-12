import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios'

axios.defaults.baseURL = 'http://mp3converter.com'
const app = createApp(App)

app.use(createPinia())
app.use(router, axios)

app.mount('#app')
