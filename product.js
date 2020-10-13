// interface
module.exports = class Product {
    constructor(price) {
        this.price = price;
    }

    setPromotion(promotion) {
        this.promotion = promotion;
    }

    static setPromotionForAll(promotion) {
        this.promotion = promotion;
    }

    getRealPrice() {
        const promotion = this.__proto__ && this.__proto__.constructor.promotion || this.promotion;
        if (!promotion) {
            return this.price;
        }
        return promotion.calculatePriceWithPromotion(this.price);
    }
};
