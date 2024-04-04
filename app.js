// const http = require("http");

// const { log } = require("console");
// const route = require("./first");
const path = require("path");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactusRoutes = require("./routes/contactus");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);
app.use("/contact-us" , contactusRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// const server = http.createServer(app);

app.listen(3000);
