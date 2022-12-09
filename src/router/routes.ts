import { RouteRecordRaw } from 'vue-router'
import HomePage from '@/pages/home/index.vue'
import PostPage from '@/pages/post/index.vue'

export const routes: RouteRecordRaw[] = [
  { path: '/', component: HomePage },
  { path: '/posts/:slug', component: PostPage }
]
