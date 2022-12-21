import { createApp } from 'vue'
import './styles/base.css'
import { router } from './router'
import App from './App.vue'
import { register } from '../plugins/client/register'
import { createHead } from '@vueuse/head'

const head = createHead()

createApp(App)
  .use(router)
  .use(register)
  .use(head)
  .mount('#app')
