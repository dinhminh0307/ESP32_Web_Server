// const http = require('http');
// const fs = require('fs');
// const { StringDecoder } = require('string_decoder');
// const path = require('path');

// const server = http.createServer((req, res) => {
//     //get signal
//     if (req.method === 'POST' && req.url === '/button-clicked') {
//         // Handle POST request to /button-clicked
//         const decoder = new StringDecoder('utf-8');
//         let buffer = '';

//         req.on('data', (data) => {
//             buffer += decoder.write(data);
//         });

//         req.on('end', () => {
//             buffer += decoder.end();
//             console.log('Button click signal received:', buffer); // Log the received data

//             // Respond to the client
//             res.writeHead(200, { 'Content-Type': 'application/json' });
//             res.end(JSON.stringify({ message: 'Signal received successfully!' }));
//         });
//     }  else {
//         let filePath = path.join(__dirname, '..', '/', 'public', req.url === '/' ? 'index.html' : req.url.substring(1));
//         // Determine content type
//         let contentType = 'text/html';
//         const ext = path.extname(filePath);
//         if (ext === '.css') {
//             contentType = 'text/css';
//         }

//         fs.readFile(filePath, (err, data) => {
//             if (err) {
//                 if (err.code === 'ENOENT') {
//                     // Handle file not found
//                     res.writeHead(404);
//                     res.end('Page not found');
//                 } else {
//                     // Handle general server error
//                     res.writeHead(500);
//                     res.end('Server error');
//                 }
//             } else {
//                 // If file is found, set the correct content type and send the file
//                 res.writeHead(200, { 'Content-Type': contentType });
//                 res.end(data);
//             }
//         });
//     }   
// });


// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.post('/signal', (req, res) => {
    // This is where you handle the signal sent from the client
    console.log('Signal received from the client');
    res.json({ message: 'Signal received successfully!' });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
