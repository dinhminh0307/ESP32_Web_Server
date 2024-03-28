const express = require('express');
const app = express();
const port = 3000;

app.get('/button-pressed', (req, res) => {
    console.log('Button has been pressed!');
    res.send('Button press acknowledged');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
