import Vue from 'vue'
import Router from 'vue-router'
import PostList from '../components/postlist'

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
    }
  ]
})
