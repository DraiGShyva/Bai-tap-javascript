const express = require('express');
const connectDB = require('./config/connect_db');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

connectDB();

app.listen(8888, () => {
    console.log('Server is running on port 8888');
});