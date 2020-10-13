const Promotion = require('./promotion');

module.exports = class PercentPromotion extends Promotion {
    constructor(percent) {
        super();
        this.percent = percent;
    }

    calculatePriceWithPromotion(price) {
        return price - price * this.percent / 100;
    }
};
