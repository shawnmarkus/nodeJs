// const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/RandomData";

const { connectDB } = require("./connectByMongoose");
const insertionModel = require("./model");

const updateOne = async function () {
  connectDB(url); // to connect the db

  const conditionalUpdate = await insertionModel.findOne({ id: 2 }); //imported model is used

  if (
    conditionalUpdate.category === "cake" &&
    conditionalUpdate.type !== "desert"
  ) {
    insertionModel
      .findOneAndUpdate(
        { id: conditionalUpdate.id },
        { $set: { type: "desert" } },
        { new: true }
      )
      .then((returnedDoc) => console.log("conditional Update : ", returnedDoc));
  } else {
    insertionModel
      .findOneAndUpdate(
        { id: conditionalUpdate.id },
        { $set: { type: "donuts" } },
        { new: true }
      )
      .then((returnedDoc) => console.log("conditional Update : ", returnedDoc));
  }
};

updateOne();
