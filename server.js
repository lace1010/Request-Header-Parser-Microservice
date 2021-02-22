// server.js
// where your node app starts

// init project
require("dotenv").config();
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.get("/api/whoami", function (req, res) {
  let userIpAddress = req.ip; // requests the ip address
  let userLanguage = req.headers["accept-language"]; // Gets the preferred language and others that it would accept

  // console.log(req.headers);
  // req.headers returns a bunch of information like host:, connection:, 'upgrade-insecure-requests':, accept:, 'user-agent';, referer, 'accept-language:, and 'accept-encoding'
  // Then to get software information just call on the 'user-agent' key to get value
  let userSoftware = req.headers["user-agent"];

  // Returns json object with three keyvalue pairs we wanted ipaddress, language and software
  res.json({
    ipaddress: userIpAddress,
    language: userLanguage,
    software: userSoftware,
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
