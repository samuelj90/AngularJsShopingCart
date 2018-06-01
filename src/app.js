import angular from 'angular';
import './style.css';
const MODULE_NAME = 'app';
angular.module(MODULE_NAME, [])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: require('./views/shop.html'),
        controller: StoreController
    }).
    when('/products/:productId', {
        templateUrl: require('./views/product.html'),
        controller: StoreController
    }).
    when('/cart', {
        templateUrl: require('./views/cart.html'),
        controller: StoreController
    }).
    otherwise({
        redirectTo: '/'
    });
}]);

export default MODULE_NAME;