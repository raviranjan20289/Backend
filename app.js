const http = require('http');

const routes = require('./clean up/routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(9000);
