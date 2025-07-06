import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userId: BigInt,
    userName: String,
    password: String,
    registrationNumber: String,
    email: String,
    mobileNumber: BigInt
});

const User = mongoose.model('User', userSchema);

export default User;
