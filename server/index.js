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

//Cohere API key is from Peter's Account
const cohere = require("cohere-ai");
cohere.init("1eOymMhMvr6mAKmB5utDW0AWQM5jpbF0SAofeGBa");

app.get('/getTest', (req, res) => {
    res.send('test from backend');
});

const userRouter = require('./routes/users');
app.use('/users', userRouter);

//Cohere Code
app.use(express.json());
app.post('/botCall', (req, res) => {

    const inputPrompt = req.body.inputPrompt;
    //console.log('Received input prompt:', inputPrompt);
    
    (async () => {
        const response = await cohere.generate({
            prompt: inputPrompt,
        });

        //console.log(response.body.generations);
        res.send(response.body.generations);

    })();
});

app.listen(3001, () => {
    console.log('server running on port 3001');
});