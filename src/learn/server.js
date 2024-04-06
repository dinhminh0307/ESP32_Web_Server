const http = require('http')

const server = http.createServer((req,res) => {
    /*content type:
    plain/text: file to download
    text/html: html structure */
    // this function is executed when a request is made

    /* ignore the favicon */
    if(req.url === '/favicon.ico') {
        res.writeHead(204); // No Content
        res.end();
        return;
    }
    console.log('request made');
    console.log(req.url);
    res.writeHead(200, { 'Content-Type': 'text/html'}); // response as text
    res.write('<p>Hello</p>'); // write text to browser
    res.end();
})

const port = 3000; // port to communicate from browser to server

server.listen(port, 'localhost', () => {
    console.log('Waiting for request') // server is waiting a request
}) 