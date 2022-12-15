import { createApp } from 'vue'
import './styles/base.css'
import { router } from './router'
import App from './App.vue'
import { register } from '../plugins/client/register'

createApp(App)
  .use(router)
  .use(register)
  .mount('#app')
