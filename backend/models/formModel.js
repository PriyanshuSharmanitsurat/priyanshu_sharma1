// models/formModel.js
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  fullName: String,
  phoneNumber: String,
  dateOfBirth: Date,
  country: String,
  gender: String,
});

module.exports = mongoose.model('Form', formSchema);
