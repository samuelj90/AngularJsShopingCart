app.factory("DataService", function() {
    var products = function() {
        this.products = [{
            id: 1,
            name: "Product1",
            price: 500,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            product_image: "http://lorempixel.com/250/150/food/1",
            sku:10
        }, {
            id: 2,
            name: "Product2",
            price: 500,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            product_image: "http://lorempixel.com/250/150/food/2",
            sku:10
        }, {
            id: 3,
            name: "Product3",
            price: 500,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            product_image: "http://lorempixel.com/250/150/food/3",
            sku:10
        }, {
            id: 4,
            name: "Product4",
            price: 500,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            product_image: "http://lorempixel.com/250/150/food/4",
            sku:10
        }, {
            id: 5,
            name: "Product5",
            price: 500,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            product_image: "http://lorempixel.com/250/150/food/5",
            sku:10
        }, {
            id: 6,
            name: "Product6",
            price: 500,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            product_image: "http://lorempixel.com/250/150/food/6",
            sku:10
        }, {
            id: 7,
            name: "Product7",
            price: 500,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            product_image: "http://lorempixel.com/250/150/food/7",
            sku:10
        }, {
            id: 8,
            name: "Product8",
            price: 500,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            product_image: "http://lorempixel.com/250/150/food/8",
            sku:10
        }];
       this.getProducts=function(){
        return this.products;
       }
    };
    var cart = function(){
        this.products=[]
        this.getCartItems=function(){
            return this.products;
        }

    };
    // return data object with store and cart
    return {
        products: new products(),
        cart: new cart()
    };
});