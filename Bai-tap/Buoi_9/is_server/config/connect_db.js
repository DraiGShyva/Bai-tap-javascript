const { default: mongoose } = require('mongoose');
const config = require('./config');

const connectDB = async () => {
    try {
        mongoose.connect(config.API_DB);
        console.log('Database connected');
    } catch (error) {
        console.log('Database connection failed');
    }
};

module.exports = connectDB;