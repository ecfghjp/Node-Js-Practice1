const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

let dev_db_url = 'mongodb://localhost:27017/products';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.use('/products', product);
let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});