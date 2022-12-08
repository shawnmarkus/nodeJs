const express = require("express");
const { connectDB } = require("./connectByMongoose");
const insertionModel = require("./model");
const url = "mongodb://127.0.0.1:27017/RandomData";

const app = express();

connectDB(url);

app.get("/", async function (req, res) {
  let data = await insertionModel.findOne({});
  if (data) {
    res.json({ data, msg: "you retrived the data successfully " });
  }
});

function middleware(req, res, next) {
  // if actual address is https://example.com/creatures?filter=sharks
  console.log(req.protocol); // "https"
  console.log(req.hostname); // "example.com"
  console.log(req.path); // "/creatures"
  // console.log(req.originalUrl); // "/creatures?filter=sharks"
  // console.log(req.subdomains);
  next();
}

app.all("/test", middleware, async function (req, res) {
  let allData = await insertionModel.find({});
  if (allData) {
    res.json({ allData, msg: "you retrived the data successfully " });
  }
});

app.post("/users", function (req, res) {
  res.send(`welcome to the users space \n`);
});

app.listen(8000, function () {
  console.log("succesfully connected");
});
