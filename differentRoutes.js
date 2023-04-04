
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/home') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('</html>');
    return res.end("Welcome to home page");
  }
  if (url === '/contactus') {
  
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');

    res.write('</html>');
    return res.end("Welcome to contact us page ");
  }

  if (url === '/node') {
  
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');

    res.write('</html>');
    return res.end("Welcome to Node js project ");
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3500);
