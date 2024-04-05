const http = require('http')

const server = http.createServer((req,res) => {
    console.log('request made') // this function is executed when a request is made
})

const port = 3000; // port to communicate from browser to server

server.listen(port, 'localhost', () => {
    console.log('Waiting for request') // server is waiting a request
}) 