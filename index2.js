const express = require('express'),
     http = require('http');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use((req, res, next) => {
  console.log(req.headers);
  res.header("Access-Control-Allow-Origin", "*");
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.json({
            "name":"Hi this is a response from server side. My name is Batman"
           });

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});