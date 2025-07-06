const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: BigInt,
    userName: String,
    password: String,
    registrationNumber: String,
    email: String,
    mobileNumber: BigInt
});

module.exports = mongoose.model('User',userSchema);