// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.scss'

const app = createApp(App).use(store).use(router)

app.use(ElementPlus)
app.mount('#app')
