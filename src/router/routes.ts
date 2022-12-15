import { RouteRecordRaw } from 'vue-router'
import Home from '@/pages/home/index.vue'
import Post from '@/pages/posts/index.vue'
import Search from '@/pages/search/index.vue'

export const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/posts/:slug', component: Post },
  { path: '/search', component: Search }
]
