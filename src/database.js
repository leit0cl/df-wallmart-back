const mongoose = require('mongoose');

const URI = process.env.MONGOOSE_URI
    ? process.env.MONGOOSE_URI
    : 'mongodb://mongodb:27017/promotions';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    auth: { authenticationDatabase: 'admin' },
    user: 'productListUser',
    pass: 'productListPassword',
});
