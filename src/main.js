// 切换样式
import '@/assets/main.scss'
//导入字体文件
import '@/assets/dsfont.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
