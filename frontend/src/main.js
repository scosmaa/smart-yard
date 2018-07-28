import Vue from 'vue';
import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';
import App from './App.vue';
import router from './router';

const SocketInstance = socketio('http://192.168.1.14:3000');

Vue.use(VueSocketIO, SocketInstance);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
