const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/user");

router.post("/signin", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send(user);
      });
    }
  })(req, res, next);
});

router.post("/register", (req, res) => {
  const { email, fullName, password } = req.body;
  User.findOne({ email: email }, async (err, user) => {
    if (err) throw err;
    if (user) res.send("User Already Exists");
    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        email: email,
        fullName: fullName,
        password: hashedPassword,
      });
      await newUser.save();
      res.send(newUser);
    }
  });
});

const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res
      .status(401)
      .json({ msg: "You are not authorized to view this resource" });
  }
};

router.get("/logout", (req, res, next) => {
  req.logout();
  // res.redirect("/");
});

module.exports = router;
