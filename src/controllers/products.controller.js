const productCtrl = {};

const Product = require('../models/Product');

productCtrl.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};


productCtrl.getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
}


module.exports = productCtrl;