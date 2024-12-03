import Vue from 'vue';
import Router from 'vue-router';

import routeAbout from '@/router/routeAbout';
import routePlayground from '@/router/routePlayground';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue'),
      children: routeAbout,
    },
    {
      path: '/playground',
      name: 'playground',
      component: () => import('@/views/Playground.vue'),
      children: routePlayground,
    },
  ],
});
