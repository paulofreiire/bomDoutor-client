import createPersistedState from 'vuex-persistedstate';
import Vue from 'vue';
import Vuex from 'vuex';
import patients from './patients';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    patients,
  },
  mutations: {},
  actions: {},
  plugins: [
    createPersistedState(),
  ],
});
