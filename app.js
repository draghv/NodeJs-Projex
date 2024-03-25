const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req);
  const url = req.url;
  if (url === "/home") {
    res.write("<html>");
    res.write("<head><title>hemlo</title></head>");
    res.write("<body><h1>Welcome Home</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/about") {
    res.write("<html>");
    res.write("<head><title>hemlo</title></head>");
    res.write("<body><h1>Welcome to About Us page</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/node") {
    res.write("<html>");
    res.write("<head><title>hemlo</title></head>");
    res.write("<body><h1>Welcome to my Node Js project</h1></body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "DUMMY");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>hemlo</title></head>");
  res.write("<body><h1>Welcome to my Nodejs Project</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
