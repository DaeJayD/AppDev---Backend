require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require("./config/db");
connectDB();

const app = express();

// Middleware to parse JSON data
app.use(express.json());
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('Connection Success');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
 