import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThermometerHalf, faTint, faUmbrella } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import router from './router';

library.add(faThermometerHalf, faTint, faUmbrella);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
