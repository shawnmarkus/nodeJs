const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/RandomData";

const updateOne = async function () {
  try {
    mongoose
      .connect(url)
      .then((db) => console.log("connected to db "))
      .catch((err) => console.log("Failed to connect connected"));

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

    // const retrivedData = await insertionModel.findOneAndUpdate(
    //   { id: 8 },
    //   { $set: { type: "bakery" } },
    //   { returnDocument: "after", new: true }
    //   //   new or returnDocument is given in optiom because it help to get the updated doc
    // );

    // if (retrivedData) {
    //   console.log("updated :======> ", retrivedData);
    // }

    const conditionalUpdate = await insertionModel.findOne({ id: 2 });
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
        .then((returnedDoc) =>
          console.log("conditional Update : ", returnedDoc)
        );
    } else {
      insertionModel
        .findOneAndUpdate(
          { id: conditionalUpdate.id },
          { $set: { type: "donuts" } },
          { new: true }
        )
        .then((returnedDoc) =>
          console.log("conditional Update : ", returnedDoc)
        );
    }
  } catch (err) {
    console.log(err.errmsg);
  }
};

updateOne();
