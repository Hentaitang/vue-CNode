import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
import Postlist from '@/components/Postlist'
import UserInfo from '@/components/UserInfo'

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
    },
    {
      path: '/user/:name',
      component: UserInfo
    }
  ]
})
