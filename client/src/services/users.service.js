import axios from 'axios';

const URL = 'http://127.0.0.1:5000';

/**
 * User related API
 * This class is responsible for making calls to server via axios for user related stuff.
 */

class UserService {
  /**
   * Add new User - register
   * @param {object} payload which insludes email, fullName and password
   * @return {promise}
   */
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

  /**
   * login
   * @param {object} payload which insludes email and password
   * @return {promise}
   */
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

  /**
   * logout
   * @param {null} none
   * @return {promise}
   */
  logout() {
    return axios.post(`${URL}/logout`);
  }
}
export default new UserService();
