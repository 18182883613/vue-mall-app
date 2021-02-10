import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Classify from '../views/Classify.vue'
import Shopping from '../views/Shopping.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home/classify'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'classify',
        component: Classify
      },
      {
        path: 'shopping',
        component: Shopping
      }
    ]
  },
  {
    path: '/search',
    component: Search
  }
]

const router = new VueRouter({
  routes
})

export default router
