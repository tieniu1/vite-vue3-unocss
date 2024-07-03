import './assets/main.less'
import 'virtual:uno.css'
import register from '@/register'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18nIn from './i18n'

const app = createApp(App)

app.use(i18nIn.instance)
app.use(createPinia())
app.use(router)
app.use(register)

app.mount('#app')
