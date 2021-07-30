import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showToast: false,
  },
  mutations: {
    updateToast(state, payload) {
      state.showToast = payload;
    },
  },
  actions: {
    updateToast({ commit }, payload) {
      commit("updateToast", payload);
    },
  },
  getters: {
    toastStatus: (state) => state.showToast,
  },
});
