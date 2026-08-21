import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.end("<h1>Hello</h1>");
  console.log("Server hit");
});

server.listen(4444, () => console.log("server is running..."));
