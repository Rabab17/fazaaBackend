const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const http = require("http");
const server = http.createServer(app);

require("dotenv").config();

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  connect();
  console.log(`Server running on port ${PORT}`);
});

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};

