import '@/assets/css/main.css'
import router from '@/router/index.js'
import store from '@/store/index.js'

import { createApp } from 'vue'
import App from '@/pages/App.vue'
import { globalState } from '@/globalState.js'

const app = createApp(App)

app.config.globalProperties.globalState = globalState

app
    .use(router)
    .use(store)
    .mount('#app')