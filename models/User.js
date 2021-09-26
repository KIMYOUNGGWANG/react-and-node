const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, // space 띄어쓰기 없애주는 역할
    unique: 1,
  },
  password: {
    type: String,
    minLength: 5,
  },
  role: {
    // 관리자냐? 유저이냐?
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = { User };
