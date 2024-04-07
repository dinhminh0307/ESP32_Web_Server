
// module.exports = (req, res) => {
//     if (req.method === 'POST') {
//         res.json({ message: 'Signal received successfully!' });
//     } else if(req.method === 'GET') {
//         res.status(200).json({ message: 'done' });
//     }
//      else {
//         res.status(405).send('Method Not Allowed');
//     }
// };

module.exports = (req, res) => {
    if (req.method === 'POST') {
        res.json({ message: 'Signal received successfully!' });
    } else if (req.method === 'GET') {
        // Check if the request has a query parameter 'type' set to 'esp32'
        if (req.query.type === 'esp32') {
            // Handle ESP32 polling request
            res.status(200).json({ message: 'ESP32 polling received.' });
        } else {
            // Handle regular browser GET request
            res.status(200).json({ message: 'done' });
        }
    } else {
        res.status(405).send('Method Not Allowed');
    }
};

