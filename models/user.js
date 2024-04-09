
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  profilePicture: String
});

module.exports = mongoose.model('Users', userSchema);


