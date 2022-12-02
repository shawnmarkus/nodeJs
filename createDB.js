const MongoClient = require("mongodb").MongoClient;
const url2 = "mongodb://127.0.0.1:27017/";
// using mongoDB
// 1st way
(async function () {
  const client = new MongoClient(url2);
  try {
    // console.log("trying to connect");
    // 1st way ----------------------------------------------------------------------------
    // await client
    //   .connect()
    //   .then((db) => {
    //     console.log("connected successfully");
    //     db.db("RandomData").createCollection("dummyData");
    //   })
    //   .catch((err) => console.log(err));
    // 2nd way ----------------------------------------------------------------------------
    await client.connect().then((db) => console.log("connected to db"));
    const dummyData = await client.db("RandomData").collection("dummyData");

    const insertedData = await dummyData.insertMany([
      { id: 1, category: "cake", type: "chocolate", qty: 10 },
      { id: 2, category: "cake", type: "ice cream", qty: 25 },
      { id: 3, category: "pie", type: "boston cream", qty: 20 },
      { id: 4, category: "pie", type: "blueberry", qty: 15 },
      { id: 5, category: "butterscotch", type: "cake", qty: 10 },
      { id: 6, category: "venilla", type: "ice cream", qty: 25 },
      { id: 7, category: "chocolate", type: "cake", qty: 20 },
      { id: 8, category: "pineapple", type: "cake", qty: 15 },
    ]);

    if (insertedData) {
      console.log("number of data inserted : ", insertedData.insertedCount);
      const cursor = dummyData.find({});
      await cursor.forEach((doc) => console.log(doc));
    }

    // --------------------------- little diff in printing method --------------------------------------
    /* note if you use then and catch block then nothing is returned to variable to which it is assigned */
    // await dummyData
    //   .insertMany([
    //     { id: 1, category: "cake", type: "chocolate", qty: 10 },
    //     { id: 2, category: "cake", type: "ice cream", qty: 25 },
    //     { id: 3, category: "pie", type: "boston cream", qty: 20 },
    //     { id: 4, category: "pie", type: "blueberry", qty: 15 },
    //     { id: 5, category: "butterscotch", type: "cake", qty: 10 },
    //     { id: 6, category: "venilla", type: "ice cream", qty: 25 },
    //     { id: 7, category: "chocolate", type: "cake", qty: 20 },
    //     { id: 8, category: "pineapple", type: "cake", qty: 15 },
    //   ])
    //   .then(async (data) => {
    //     console.log("number of data inserted : ", data.insertedCount);
    //     const cursor = dummyData.find({});
    //     await cursor.forEach((doc) => console.log(doc));
    //   })
    //   .catch((err) => console.log(err));

    // --------------------------------------------------------------------------------------------------------------------
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
})();
// -------------------------------------------------------------------------------------------------------------------------

// using mongoose

const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/RandomData";
mongoose
  .connect(url)
  .then((db) => console.log("connected to db "))
  .catch((err) => console.log("not connected"));

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

const insertedData = insertionModel
  .insertMany([
    { id: 1, category: "cake", type: "chocolate", qty: 10 },
    { id: 2, category: "cake", type: "ice cream", qty: 25 },
    { id: 3, category: "pie", type: "boston cream", qty: 20 },
    { id: 4, category: "pie", type: "blueberry", qty: 15 },
    { id: 5, category: "butterscotch", type: "cake", qty: 10 },
    { id: 6, category: "venilla", type: "ice cream", qty: 25 },
    { id: 7, category: "chocolate", type: "cake", qty: 20 },
    { id: 8, category: "pineapple", type: "cake", qty: 15 },
  ])
  .then((data) =>
    data.forEach((doc) => {
      console.log(doc);
    })
  )
  .catch((err) => console.log(err.errmsg));

//just as a use case
// (async function () {
//   const dummyDataInsertionCheck = new insertionModel({
//     id: 9,
//     category: "cake",
//     type: "pastry",
//     qty: 100,
//   });

//   await dummyDataInsertionCheck
//     .save()
//     .then((succ) => {
//       console.log("inserted one doc");
//     })
//     .catch((err) => console.log(err.errmsg));
// })();

(async function () {
  const cursor = await insertionModel.find({});
  // await cursor.array.forEach(element => {
  await cursor.forEach((doc) => console.log(doc));
  // });
})();

//  my question is that we received what , in db

// ---------------------------------------------------notes ----------------------------------------------------------------
// web service:
// a web service is a service offered by a device to other device with each other on the internet

// steps:
//1. import the db module
//2. establish the connection with that const module
//3. check whether the connection is established
//4. if established , execute the query for the db

// connection create
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.createCollection("customers", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });

// api are application programmming interfaces that provides a platform for executing similar kind of functions
// web serviices on the other hand is a kind of service on the internet
// web servives are the type of api which has neccessary info to be shared across multiple devices
