module.exports = (req, res) => {
    if (req.method === 'POST') {
        // Handle the POST request
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            console.log('Button click signal received:', body);
            // Respond to the client
            res.status(200).json({ message: 'Signal received successfully!' });
        });
    } else {
        // Respond with a 405 if the method is not POST
        res.status(405).end();
    }
};