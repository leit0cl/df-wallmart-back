; const { Schema, model } = require('mongoose');

const productSchema = new Schema(
    {
        id: Number,
        brand: String,
        description: String,
        image: String,
        price: Number
    });

    

module.exports = model('Product', productSchema);