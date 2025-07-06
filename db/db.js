import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import mongoose from 'mongoose';
import User from './models/userModel.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, 'D:/VibeFlow/.env') });

const app = express();
const server = http.createServer(app);

// ✅ Check if DB_URL is loaded correctly
const dbUrl = process.env.DB_URL;
console.log(dbUrl);
if (!dbUrl) {
  console.error('❌ DB_URL not found in .env file');
  process.exit(1);
}

// ✅ Connect to MongoDB
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('✅ Connected to MongoDB');

  // ✅ Insert only after successful connection
  await insert();
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

// ✅ Insert function
async function insert() {
  try {
    await User.create({
      userId: 3n, // note: use BigInt `3n` if your schema uses BigInt
      userName: "sa7ya",
      password: "23f43",
      registrationNumber: "22BEYd1002342",
      email: "satya1234@gmdfail.com",
      mobileNumber: 9876574310n // same here
    });
    console.log('✅ User inserted');
  } catch (err) {
    console.error('❌ Error inserting user:', err);
  }
}

server.listen(3000, () => {
  console.log('🚀 Server is running on port 3000');
});
