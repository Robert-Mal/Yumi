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

  register(payload) {
    return axios({
      method: 'POST',
      data: {
        email: payload.email,
        fullName: payload.fullName,
        password: payload.password,
      },
      url: 'http://localhost:5000/register',
    });
  }

  login(payload) {
    return axios({
      method: 'POST',
      data: {
        username: payload.email,
        password: payload.password,
      },
      url: 'http://localhost:5000/signin',
    });
  }

  logout() {
    return axios.post(`${URL}/logout`);
  }
}
export default new UserService();
