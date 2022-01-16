const mongoose = require("mongoose");

/**
 * userSchema - mongoose schema for the user object
 */
const userSchema = mongoose.Schema(
  {
    email: String,
    fullName: String,
    password: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model("user", userSchema);
