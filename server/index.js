const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {}
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('database connection successful');
})

app.get('/getTest', (req, res) => {
    res.send('test from backend');
});

const userRouter = require('./routes/users');
app.use('/users', userRouter);

app.listen(3001, () => {
    console.log('server running on port 3001');
});
