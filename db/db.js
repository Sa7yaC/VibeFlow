const app = require('express')();
const http = require('http').Server(app);
require('dotenv').config();
const mongoose = require('mongoose');
const dbPassword = process.env.DB_PASSWORD;

mongoose.connect("mongodb+srv://sa7ya30:"+dbPassword+"@cluster0.fxt8exs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const User = require('./models/userModel');

async function insert(){
  await User.create({
    userId : 1,
    userName: "Satya",
    password: "1234",
    registrationNumber: "22BEY10024",
    email: "satya123@gmail.com",
    mobileNumber: "9876543210"
  });
}
insert();

http.listen(3000, function(){
  console.log('Server is running');
});