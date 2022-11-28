import { RouteRecordRaw } from 'vue-router'
import HomePage from '@/pages/home/HomePage.vue'
import PostPage from '@/pages/post/PostPage.vue'

export const routes: RouteRecordRaw[] = [
  { path: '/', component: HomePage },
  { path: '/posts/:slug', component: PostPage }
]
