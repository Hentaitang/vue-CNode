import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
import Postlist from '@/components/Postlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Postlist
    },
    {
      path: '/topic/:id',
      component: Article
    }
  ]
})
