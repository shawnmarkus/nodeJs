var http = require("http"); //importing the in built http module
var dt = require("./ownModule"); //calling one module from another/user defined module
//dt : today's date
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The date and time are currently: " + dt.myDateTime() + "\n");

    //testing for writing number of times and for checking the channel
    res.write("The date and time for the 2nd time: " + dt.myDateTime());

    //datetime is being fetched from the  outside module
    //using the content type mentioned above as text/htmluser defined module
    res.end(); //ending the writing functionality
  })
  .listen(8080, () => console.log("you are connected")); //mentioning which port our application will run on the server
