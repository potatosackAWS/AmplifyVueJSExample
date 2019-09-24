import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Logout from '@/pages/Logout'
import Storage from '@/pages/Storage'
import Privacy from '@/pages/Privacy'
import Callback from '@/pages/Callback'
import NotFound from '@/pages/NotFound'
import Authentication from '@/pages/Authentication'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // Home Page
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    // Auth Callback
    {
      name: 'Callback',
      path: '/callback/',
      component: Callback
    },

    // Logout
    {
      name: 'Logout',
      path: '/logout/',
      component: Logout
    },

    // Authentication
    {
      path: '/auth/',
      name: 'Authentication',
      component: Authentication
    },

    // Storage
    {
      path: '/storage/',
      name: 'Storage',
      component: Storage
    },

    // Privacy Policy
    {
      name: 'Privacy',
      path: '/privacy/',
      component: Privacy
    },

    // 404 Not Found
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
