// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://127.0.0.1:27017/employee";
// // using mongoDB
// // 1st way
// const client = new MongoClient(url);
// (async function () {
//   try {
//     // console.log("trying to connect");
//     // 1st way ----------------------------------------------------------------------------
//     // await client
//     //   .connect()
//     //   .then((db) => {
//     //     console.log("connected successfully");
//     //     db.db("RandomData").createCollection("dummyData");
//     //   })
//     //   .catch((err) => console.log(err));
//     // 2nd way ----------------------------------------------------------------------------
//     await client.connect().then((db) => console.log("connected to db"));
//     const dummyData = await client.db("RandomData").collection("dummyData");
//     try {
//       dummyData
//         .insertMany([
//           { _id: 1, category: "cake", type: "chocolate", qty: 10 },
//           { _id: 2, category: "cake", type: "ice cream", qty: 25 },
//           { _id: 3, category: "pie", type: "boston cream", qty: 20 },
//           { _id: 4, category: "pie", type: "blueberry", qty: 15 },
//           { _id: 5, category: "butterscotch", type: "cake", qty: 10 },
//           { _id: 6, category: "venilla", type: "ice cream", qty: 25 },
//           { _id: 7, category: "chocolate", type: "cake", qty: 20 },
//           { _id: 8, category: "pineapple", type: "cake", qty: 15 },
//         ])
//         .then((res) =>
//           console.log("Number of document inserted : ", res.insertedCount)
//         )
//         .catch((err) => {
//           // console.log(err);
//           console.log("failed to insert");
//         });
//     } catch (err) {
//       console.log("failed to insert");
//     }

//     // console.log("executing the lower line");
//     const cursor = dummyData.find({});
//     await cursor.forEach((doc) => console.log(doc));

//     // const cursor = dummyData.find({});
//     // console.log("async");
//     // for await (const doc of cursor) {
//     //   console.log(doc);
//     // }
//     // docs.forEach((e) => console.log(e));
//     // console.log(cursor);
//     // if (cursor) {
//     //   console.log("printing the docs");
//     //   await cursor.forEach((instance) => {
//     //     console.log("hey there");
//     //     console.log(instance);
//     //   });
//     // }
//   } catch (err) {
//     console.log(err);
//   }
// })();

// connectToDB();

// // 2nd way - without creating the new instance of the mongodbclient
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   console.log("connected to db");
//   var dbObj = db.db("RandomData");
//   dbObj.createCollection("dummyData", function (err, res) {
//     if (err) throw err;
//     console.log("collection created");
//   });
// });

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   let dbObj = db.db("RandomData");
//   // let objPush = []
//   dbObj.collection("dummyData").insertMany(
//     [
//       { _id: 1, category: "cake", type: "chocolate", qty: 10 },
//       { _id: 2, category: "cake", type: "ice cream", qty: 25 },
//       { _id: 3, category: "pie", type: "boston cream", qty: 20 },
//       { _id: 4, category: "pie", type: "blueberry", qty: 15 },
//     ],
//     function (err, res) {
//       if (err) throw err;
//       console.log("object inserted");
//     }
//   );
// });

// ------------------------------------------------------------------------------------------------------------------------------
// using mongoose
const url = "mongodb://127.0.0.1:27017/RandomData";

const mongoose = require("mongoose");
mongoose
  .connect(url)
  .then((db) => console.log("connected to db "))
  .catch((err) => console.log("not connected"));

const dummySchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  category: String,
  type: String,
  qty: Number,
});

const model = mongoose.model("dummy", dummySchema);

model
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
  .then((data) => console.log(data));

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
