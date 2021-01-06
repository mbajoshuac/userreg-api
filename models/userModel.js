const mongoose = require('mongoose')
const { Schema, model } = mongoose

const usersSchema = new Schema({
    firstName: String,
    lastName: String,
    phoneNumber: String,
    email: String,
    country: String,
    password: String,
    photo: String

})

module.exports = model('User', usersSchema)

