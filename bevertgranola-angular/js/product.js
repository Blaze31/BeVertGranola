app.controller('productCtrl',['$scope','$location','productService', function ($scope,$location,productService) {
    var productId = Number($location.path()[$location.path().length - 1]);
    $scope.selectedProduct = productService.getProductId(productId);
    if($scope.selectedProduct == undefined){
        $location.path('/store');
    }
}]);