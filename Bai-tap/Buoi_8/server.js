const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.end('Hello World Hiep');
});

server.listen(3000);