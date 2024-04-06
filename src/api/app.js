module.exports = (req, res) => {
    if (req.method === 'POST') {
        res.json({ message: 'Signal received successfully!' });
    } else {
        res.status(405).send('Method Not Allowed');
    }
};
