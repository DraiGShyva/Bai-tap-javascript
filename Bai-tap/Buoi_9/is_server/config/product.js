const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quanlity: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Product', productSchema);