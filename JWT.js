// const express = require("express");
// const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

let jwtSecretKey = "process.env.JWT_SECRET_KEY";
let data = {
  name: "gopal",
};

const token = jwt.sign(data, jwtSecretKey, { algorithm: "RS256" });
const token1 = jwt.sign(data, jwtSecretKey);
const token2 = jwt.sign(data, jwtSecretKey);
const token3 = jwt.sign(data, jwtSecretKey);

if (token == token1 && token == token2 && token == token3) {
  console.log("token 1");
}

// let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;

const verified = jwt.verify(token, jwtSecretKey);
console.log("🚀 ~ file: JWT.js ~ line 17 ~ verified", verified);

// const app = express();

// // Set up Global configuration access
// dotenv.config();

// let PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is up and running on ${PORT} ...`);
// });
