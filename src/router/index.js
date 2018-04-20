import Vue from 'vue'
import Router from 'vue-router'
import PostList from '../components/postlist'
import UserInfo from '../components/userinfo'
import PostInfo from '../components/postinfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        main: PostList
      }
    },
    {
      path: '/search',
      name: 'search',
      components: {}
    },
    {
      path: '/user/:name',
      name: 'user_info',
      components: {
        main: UserInfo
      }
    },
    {
      path: '/:id',
      name: 'post_info',
      components: {
        main: PostInfo
      }
    }
  ]
})
