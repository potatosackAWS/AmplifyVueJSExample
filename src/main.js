// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// AWS Amplify
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import awsmobile from './aws-exports'

// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// Bootstrap
import BootstrapVue from 'bootstrap-vue'

if (process.env.NODE_ENV === 'development') {
  awsmobile.oauth.redirectSignIn = 'http://localhost:8080/callback/'
  awsmobile.oauth.redirectSignOut = 'http://localhost:8080/'
  awsmobile.cookieStorage.domain = 'localhost'
  awsmobile.cookieStorage.secure = false
}

Amplify.configure(awsmobile)
Vue.use(VueAxios, axios)
Vue.use(AmplifyPlugin, AmplifyModules, BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
