const { StringDecoder } = require('string_decoder');

module.exports = (req, res) => {
    if (req.method === 'POST') {
        const decoder = new StringDecoder('utf-8');
        let buffer = '';

        req.on('data', (data) => {
            buffer += decoder.write(data);
        });

        req.on('end', () => {
            buffer += decoder.end();
            console.log('Button click signal received:', buffer); // Log the received data

            // Respond to the client
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Signal received successfully!' }));
        });
    }
};
