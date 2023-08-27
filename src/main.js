import './design/main.scss'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import 'ant-design-vue/dist/antd.css'
import {createApp} from 'vue'
import {i18n} from '@/locale/index.js'
import Antd from 'ant-design-vue'
import router from './router'
import {setupStore} from './stores'

import App from './App.vue'

const app = createApp(App)

setupStore(app)
app.use(i18n)
app.use(Antd)
app.use(router)
app.mount('#app')
