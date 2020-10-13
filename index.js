const TechProduct = require('./technology-product');
const GroceriesProduct = require('./groceries-product');
const PercentPromotion = require('./promotion-percent');

const laptop = new TechProduct(1000);
const sale50percent = new PercentPromotion(50);

console.log('Original price of laptop: ', laptop.getRealPrice());

laptop.setPromotion(sale50percent);
console.log('Sale price of laptop: ', laptop.getRealPrice());

const ipad = new TechProduct(2000);
console.log('Original price of ipad: ', ipad.getRealPrice());
const sale10percent = new PercentPromotion(10);
TechProduct.setPromotionForAll(sale10percent);

console.log('Sale price of ipad: ', ipad.getRealPrice());
console.log('Sale price of laptop: ', laptop.getRealPrice());

const clothes = new GroceriesProduct(1500);
console.log('Original price of clothes: ', clothes.getRealPrice());
const sale20percent = new PercentPromotion(20);
GroceriesProduct.setPromotionForAll(sale20percent);

console.log('Sale price of ipad: ', ipad.getRealPrice());
console.log('Sale price of clothes: ', clothes.getRealPrice());
