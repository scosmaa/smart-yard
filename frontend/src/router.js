import Vue from 'vue';
import Router from 'vue-router';
import VueSocketIO from 'vue-socket.io';

import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter(to, from, next) {
        if (!Vue.prototype.$socket) {
          Vue.use(VueSocketIO, 'http://192.168.1.14:3000');
        }
        next();
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
