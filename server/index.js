const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.get('/getTest', (req, res) => {
    res.send('test from backend');
});

app.listen(3001, () => {
    console.log('server running on port 3001');
});
