const Product = require('./product');

module.exports = class GroceriesProduct extends Product {
    constructor(price) {
        super(price);
    }
}
