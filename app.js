const http = require("http");

const { log } = require("console");
const route = require("./first");

const server = http.createServer(route);

server.listen(3000);
