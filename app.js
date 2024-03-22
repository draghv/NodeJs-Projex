const http = require("http");

const server = http.createServer((res, req) => {
  console.log("Popcorn");
});

server.listen(4000);
