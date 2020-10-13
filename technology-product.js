const Product = require('./product');

module.exports = class TechProduct extends Product {
    constructor(price) {
        super(price);
    }
}
