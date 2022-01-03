import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: null,
  },
  getters: {
    getUser: (state) => state.user,
  },
  mutations: {
    setUser: (state, payload) => (state.user = payload),
  },
  actions: {},
});

export default store;
