const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  console.log(__dirname);
  //   res.sendFile(__dirname + "/index.html");
  res.sendFile("/home/com114/Documents/javaScript/index.html");
  //   res.sendFile(`${__dirname}/index.html`);
});

module.exports = router;
