import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import vuetify from '@/plugins/vuetify';
import axios from 'axios';

import router from './router';
import store from './store';

import App from './App.vue';

Vue.config.productionTip = false;

sync(store, router);

axios.defaults.baseURL = 'http://localhost:8000/api';

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
