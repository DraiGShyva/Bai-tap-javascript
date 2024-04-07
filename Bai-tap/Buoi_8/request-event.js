const http = require('http');

// sử dụng on của request
http.createServer((req, res) => {
    req.on('data', (chunk) => {
        console.log(`Received ${chunk.length} bytes of data.`);
    });

    req.on('end', () => {
        res.end('Data received successfully.');
    });
}).listen(3000);