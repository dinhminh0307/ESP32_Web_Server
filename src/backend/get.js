const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, '..', req.url === '/' ? 'index.html' : req.url);

    // Determine content type
    let contentType = 'text/html';
    const ext = path.extname(filePath);
    if (ext === '.css') {
        contentType = 'text/css';
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Handle file not found
                res.writeHead(404);
                res.end('Page not found');
            } else {
                // Handle general server error
                res.writeHead(500);
                res.end('Server error');
            }
        } else {
            // If file is found, set the correct content type and send the file
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
