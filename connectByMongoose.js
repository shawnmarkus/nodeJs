const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/RandomData";
const connectDB = (url) => {
  mongoose
    .connect(url)
    .then((db) => console.log("connected to db "))
    .catch((err) => console.log("Failed to connect connected", err.errmsg));
};

// connectDB(url);
module.exports = { connectDB };
// exports.connectDB;
