import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: null,
    // _id: null,
    // email: null,
    // fullName: null,
  },
  getters: {
    getUser: (state) => state.user,
    // getId: (state) => state._id,
    // getEmail: (state) => state.email,
    // getFullName: (state) => state.fullName,
  },
  mutations: {
    setUser: (state, payload) => (state.user = payload),
    // setId: (state, payload) => (state._id = payload),
    // setEmail: (state, payload) => (state.email = payload),
    // setFullName: (state, payload) => (state.fullName = payload),
  },
  actions: {},
});

export default store;
