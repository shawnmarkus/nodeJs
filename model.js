const mongoose = require("mongoose");

const dummySchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    category: String,
    type: String,
    qty: Number,
  },

  { collection: "dummyCheck" } //this is the way to give the specific collection name.
);

// MODEL : A model is a class with which we construct documents. In this case, each document will be a dummy with properties and behaviors as declared in our schema.
const insertionModel = mongoose.model("dummy", dummySchema);

module.exports = insertionModel;
