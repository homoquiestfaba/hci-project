import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store/Vuex';
import '@/registerServiceWorker';
import vuetify from '@/plugins/vuetify';

import VueCompositionAPI from '@vue/composition-api';
Vue.use(VueCompositionAPI);

Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!auth.loggedIn()) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() // make sure to always call next()!
//   }
// })

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
