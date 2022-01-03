import axios from 'axios';

const URL = 'http://127.0.0.1:5000';

const options = {
  headers: {
    'Content-Type': 'application/json',
  },
};

class UserService {
  addNewUser(payload) {
    return axios.post(`${URL}/register`, payload, options);
  }

  login(payload) {
    return axios.post(`${URL}/signin`, payload, options);
  }

  logout() {
    axios({
      method: 'GET',
      url: 'http://localhost:5000/logout',
    }).then((res) => {
      store.commit('setUser', null);
      store.commit('setId', null);
      store.commit('setEmail', null);
      store.commit('setFullName', null);
      router.push('/login');
    });
  }
}
export default new UserService();
