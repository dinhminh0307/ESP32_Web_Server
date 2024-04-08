
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
let signal = 0; // Initialize signal variable outside the request handler.
module.exports = (req, res) => {
    if (req.method === 'POST') {
        signal = 1; // Set signal to 1 upon receiving a POST request.
        res.json({ message: 'Signal received successfully!' });
    } else if (req.method === 'GET') {
        if (req.query.type === 'esp32') {
            if (signal === 1) {
                // If the signal is set, send it to the ESP32 and reset the signal
                res.status.json({ signal: 1, message: 'Signal retrieved by ESP32. Signal is now reset.' });
                signal = 0; // Reset signal after sending
            } else {
                // If there is no signal, inform the ESP32 accordingly
                res.status.json({ signal: 0, message: 'No signal for ESP32.' });
            }
    } else {
        res.status(405).send('Method Not Allowed');
    }
};
}
