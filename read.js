const fs = require("fs"); //in built module
//variable length character encoding and is  transformation version format 8 and uses 1 - 4 bytes
// the functionality of require command in NodeJs is the easiest way to include module that exist in separate file

fs.readFile("./testFile.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("data retured: ", data);
});
