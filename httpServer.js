const http = require("http");

const requestListener = function (req, res) {
  console.log("🚀 ~ file: httpServer.js ~ line 7 ~ requestListener ~ req", req);
  res.writeHead(200);
  //   if (req.url === "test") {
  res.end(req.url);
  //   } else {
  // res.end("Hello, World!");

  //   }
};

const server = http.createServer(requestListener);
server.listen(8080);
// .then(() => {
//   console.log("server started");
// });
