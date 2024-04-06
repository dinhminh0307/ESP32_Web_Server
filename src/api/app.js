// module.exports = (req, res) => {
//     if (req.method === 'POST') {
//         res.json({ message: 'Signal received successfully!' });
//     } else {
//         res.status(405).send('Method Not Allowed');
//     }
// };

const fetch = require('node-fetch');

module.exports = async (req, res) => {
    if (req.method === 'POST') {
        try {
            // Replace 'http://esp32.local/signal' with the actual URL of your ESP32 server
            const esp32Response = await fetch('http://esp32.local/signal', { method: 'POST' });
            const esp32Data = await esp32Response.json();

            res.json({ message: 'Signal received successfully!', esp32Data });
        } catch (error) {
            console.error('Error sending signal to ESP32:', error);
            res.status(500).json({ error: 'Failed to send signal to ESP32' });
        }
    } else {
        res.status(405).send('Method Not Allowed');
    }
};
