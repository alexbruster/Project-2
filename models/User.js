'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    default: 'https://www.caduceosalud.es/wp-content/uploads/2013/09/silueta.png'
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  googleUser: {
    type: Boolean,
    default: false
  },
  invitations: [{
    type: ObjectId,
    ref: 'Events'
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
