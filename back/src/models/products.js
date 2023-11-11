const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    weight: {
        uom: {
            type: String,
            required: true
        },
        value: {
            type: Number,
            required: true
        }
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('products',productsSchema);
