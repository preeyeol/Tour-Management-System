const mongoose = require("mongoose");

const user = mongoose.Schema({
  full_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: String,
  phone_number: { type: String, required: true },
  is_verified_account: { type: Boolean, required: true },
  otp: String,
  opt_expiration: Date,
});

const userModel = mongoose.model("user", user);

module.exports = userModel;
