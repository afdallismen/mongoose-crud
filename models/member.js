const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
  name: String,
  address: String,
  zipcode: String,
  email: {
    type: String,
    required: [true, 'Member email address is required']
  },
  phone: {
    type: String,
    required: [true, 'Member phone number is required']
  }
})

memberSchema.path('email').validate(function isValid (val) {
  return /[^@]+@[^\.]+\..+/.test(val)
}, '`{VALUE}` is not a valid email.')

memberSchema.path('email').validate(function isUnique (val) {
  return Member
    .findOne({ email: val })
    .then(member => member ? Promise.resolve(false) : Promise.resolve(true))
}, 'Email is already registered.')

memberSchema.path('phone').validate(function (val) {
  return val.length >= 11 && val.length <= 13
}, 'Phone number length must be between 11 and 13 character.')

const Member = mongoose.model('Member', memberSchema)

module.exports = Member