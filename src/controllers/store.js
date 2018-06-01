// the StoreController contains two objects:
// - products: contains the product list
// - cart: the shopping cart object
function StoreController($scope, $routeParams, DataService) {
    // get store and cart from service
    $scope.products = DataService.products.getProducts();
    $scope.cart = DataService.cart.getCartItems();
    // use routing to pick the selected product
    if ($routeParams.productId != null) {
        $scope.product = $scope.products.getProduct($routeParams.productId);
    }
    $scope.addToCart = function(product) {
        var found = false;
		$scope.cart.forEach(function (item) {
		if (item.id === product.id) {
			item.quantity++;
			found = true;
		}
		});
		if (!found) {
			$scope.cart.push(angular.extend({quantity: 1}, product));
		}
		$scope.products.forEach(function (item) {
			if (item.id === product.id) {
				item.sku=item.sku-1
			}
		});	
    };
    $scope.removeFromCart=function(product){
		$scope.cart.forEach(function (item) {
		if (item.id === product.id) {
			item.quantity--;
			if(item.quantity<=0){
				var index = $scope.cart.indexOf(product);
				$scope.cart.splice(index, 1);
			}
		}
		});
		$scope.products.forEach(function (item) {
			if (item.id === product.id) {
				item.sku=item.sku+1
			}
		});	
    }
    $scope.cartItemsCount=function(){
    	var cartItemsCount=0
		$scope.cart.forEach(function (item) {
			cartItemsCount=cartItemsCount+item.quantity;
		});
		return cartItemsCount;	
    };
    $scope.checkSku=function(product){
    	var retValue=true;
    	$scope.products.forEach(function (item) {
		if (item.id === product.id) {
			if(item.sku>0) 
    			retValue=false;
    		else 
    			retValue=true;
		}
		});	
    	return retValue;
    };
    $scope.getCartTotalAmount=function(){
    	var cartTotalAmount=0
		$scope.cart.forEach(function (item) {
			cartTotalAmount=cartTotalAmount+(item.price*item.quantity);
		});
		return cartTotalAmount;
    }
}
app.controller('StoreController', ['$scope, $routeParams, DataService', StoreController]);