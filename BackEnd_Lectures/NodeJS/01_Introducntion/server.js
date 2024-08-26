// Import the http module
const http = require('http');

const hostname = '127.0.0.1'
const port = 3000
// Create a server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain'); // this content type could be html, json or xml
  res.end('Hello, World!\n');
});

// Listen on port 3000
server.listen(port, hostname, () => {
  console.log(`'Server running at http://${hostname}:${port}/'`);
});
