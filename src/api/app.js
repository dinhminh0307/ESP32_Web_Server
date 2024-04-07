
module.exports = (req, res) => {
    if (req.method === 'POST') {
        res.json({ message: 'Signal received successfully!' });
    } else if(req.method === 'GET') {
        res.status(200).json({ message: 'done' });
    }
     else {
        res.status(405).send('Method Not Allowed');
    }
};

// const fetch = require('node-fetch');

// // /api/send-signal.js
// let signal = false; // This flag should be stored in a database for persistence

// module.exports = (req, res) => {
//     if (req.method === 'POST') {
//         signal = true; // Set the flag when the browser button is clicked
//         return res.json({ message: 'Signal received. Awaiting ESP32 pickup.' });
//     } else if (req.method === 'GET') {
//         // ESP32 polls this endpoint
//         if (signal) {
//             signal = false; // Reset the flag
//             return res.json({ signal: true });
//         } else {
//             return res.json({ signal: false });
//         }
//     }
//     return res.status(405).send('Method Not Allowed');
// };

