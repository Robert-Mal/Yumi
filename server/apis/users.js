const User = require("../models/user");

/**
 * UserAPI
 * Class is responsible for user related stuff.
 */
class UserAPI {
  /**
   * createUser - add new user
   * @param {object} req - request body with the email, fullName and password data
   */
  static async createUser(req, res) {
    const { email, fullName, password } = req.body;
    const user = new User({
      email: email,
      fullName: fullName,
      password: password,
    });

    user
      .save()
      .then((result) => res.send(result))
      .catch((err) => console.log(err));
  }

  /**
   * readUserByEmail - return user by it's email
   * @param {object} req - request body with the user email
   */
  static async readUserByEmail(req, res) {
    User.find({ email: req.body.email })
      .then((result) => res.send(result))
      .catch((err) => console.log(err));
  }

  /**
   * readUserById - return user by it's id
   * @param {object} req - request body with the user id
   */
  static async readUserById(req, res) {
    User.findById(req.body._id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /**
   * updateUser - change user password, fullName or password
   * @param {object} req - request body with the email, fullName and password data
   */
  static async updateUser(req, res) {
    const { _id, email, fullName, password } = req.body;
    User.findByIdAndUpdate(
      { _id },
      {
        email: email,
        fullName: fullName,
        password: password,
      }
    )
      .then((result) => res.send(result))
      .catch((err) => console.log(err));
  }

  /**
   * deleteUser - delete user
   * @param {object} req - request body with the user id we want to delete
   */
  static async deleteUser(req, res) {
    User.findByIdAndDelete({ _id: req.body._id })
      .then((result) => res.send(result))
      .catch((err) => console.log(err));
  }
}

module.exports = UserAPI;
