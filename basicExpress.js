const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send(`<h1>hello, I am shivam</h1>`);
});

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(`host = ${host} and port = ${port}`);
});
