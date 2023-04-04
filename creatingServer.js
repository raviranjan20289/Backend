
const http = require('http');

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('My name is Ravi!');
});

server.listen(4000, () => {
  console.log('Server running at http://localhost:4000/');
});