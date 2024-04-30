import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createYmaps } from 'vue-yandex-maps'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

const pinia = createPinia()
const app = createApp(App)


app.use(router)
app.use(pinia)
app.use(vuetify)
app.use(createYmaps({
    apikey: 'd17123bd-3142-47c8-9496-8cb21e6d450f',
}))

app.mount('#app')

