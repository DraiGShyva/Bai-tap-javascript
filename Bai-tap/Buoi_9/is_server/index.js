const express = require('express');
const connectDB = require('./config/connect_db');
const initRoute = require('./routes/init_route');
const app = express();

app.get('/', (req, res) => {
    res.sendFile('D:/Dell/Documents/Code/Javascript/Bai-tap/Buoi_9/is_server/index.html');
});

app.listen(8888, () => {
    console.log('Server is running on port 8888');
});

initRoute(app);
connectDB();