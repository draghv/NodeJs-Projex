const http = require("http");
const fs = require("fs");
const { log } = require("console");

const server = http.createServer((req, res) => {
  // console.log(req);
  const url = req.url;
  const method = req.method;
  const msg = fs.readFileSync("./message.txt");
  if (url === "/") {
    res.write("<html>");

    res.write("<head><title>hemlo form</title></head>");
    res.write(msg);
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  // if (url === "/home") {
  //   res.write("<html>");
  //   res.write("<head><title>hemlo</title></head>");
  //   res.write("<body><h1>Welcome Home</h1></body>");
  //   res.write("</html>");
  //   return res.end();
  // }
  // if (url === "/about") {
  //   res.write("<html>");
  //   res.write("<head><title>hemlo</title></head>");
  //   res.write("<body><h1>Welcome to About Us page</h1></body>");
  //   res.write("</html>");
  //   return res.end();
  // }
  // if (url === "/node") {
  //   res.write("<html>");
  //   res.write("<head><title>hemlo</title></head>");
  //   res.write("<body><h1>Welcome to my Node Js project</h1></body>");
  //   res.write("</html>");
  //   return res.end();
  // }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", (chunk) => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
      res.statusCode = 302;
      // res.setHeader("Location", "/");
      return res.end();
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>hemlo</title></head>");
  res.write("<body><h1>Welcome to my Nodejs Project</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
