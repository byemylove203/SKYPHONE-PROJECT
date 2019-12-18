var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true, useUnifiedTopology: true });

var products = [
    
    new Product({
    imagePath:"https://cdn.fptshop.com.vn/Uploads/Originals/2019/9/11/637037687763926758_11-pro-max-xanh.png",
    title: 'iPhone 11 Promax',
    description: 'Giảm 200.000đ khi mua kèm tai nghe airpods và 1 km khác',
    price: 3119000,
    status: 'In Stock'
}),

new Product({
    imagePath:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-purple-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566960958082",
    title: 'iPhone 11',
    description: 'Giảm 200.000đ khi mua kèm tai nghe airpods và 1 km khác',
    price: 2149000, 
    status: 'In Stock'
}),

new Product({
    imagePath:"https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg",
    title: 'iPhone XS Max',
    description: 'Giảm 200.000đ khi mua kèm tai nghe airpods và 1 km khác',
    price: 2799000, 
    status: 'In Stock'
}),

new Product({
    imagePath:"https://cdn.fptshop.com.vn/Uploads/Originals/2019/8/8/637008702547566121_SS-note-10-pl-glow-1-1.png",
    title: 'Samsung Galaxy Note 10+',
    description: 'Giảm 200.000đ khi mua kèm tai nghe airpods và 1 km khác',
    price: 2799000,
    status: 'In Stock'
}),

new Product({
    imagePath:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_8_plus_256gb_1_1.jpg",
    title: 'iPhone 8 Plus',
    description: 'Giảm 200.000đ khi mua kèm tai nghe airpods và 1 km khác',
    price: 1599000,
    status: 'In Stock'
})

];


var done = 0;
for (var i=0; i< products.length;i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}


