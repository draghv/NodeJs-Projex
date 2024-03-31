// const http = require("http");

// const { log } = require("console");
// const route = require("./first");

const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next();
});

app.use((req, res, next) => {
  console.log("In the middleware");
  res.send({ key1: 1 });
});

// const server = http.createServer(app);

app.listen(3000);
