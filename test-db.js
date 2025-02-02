require('dotenv').config();
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

async function testConnection() {
  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connection successful!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

testConnection();
