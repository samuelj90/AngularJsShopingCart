var app=angular.module('shopApp', []).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'views/shop.html',
        controller: StoreController
    }).
    when('/products/:productId', {
        templateUrl: 'views/product.html',
        controller: StoreController
    }).
    when('/cart', {
        templateUrl: 'views/cart.html',
        controller: StoreController
    }).
    otherwise({
        redirectTo: '/'
    });
}]);