import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { mail: 'example@vuex' },
    mail: 'mail@mailvuex'
  },
  mutations: {},
  actions: {},
  modules: {},
});
