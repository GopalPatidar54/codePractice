const express = require("express");

const sendFile = require("./sendFile/sendFile");

// create instance of express
const app = express();
const PORT = 7001;

app.use("/sendFile", sendFile);

app.use(function (err, req, res, next) {
  console.error(err.stack);

  res.status(500).send("Something went wrong, Express.js Interview Questions");
});

app.get("/:bvfjd", function (req, res) {
  // res.sendFile(__dirname + "/index.html");
  // res.sendFile("/home/com114/Documents/javaScript/index.html");
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(PORT, function () {
  console.log("server start on port", PORT);
});
