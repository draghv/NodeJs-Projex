// const http = require("http");

// const { log } = require("console");
// const route = require("./first");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin' ,adminRoutes);
app.use('/shop' ,shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

// const server = http.createServer(app);

app.listen(3000);
