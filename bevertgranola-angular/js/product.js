app.controller('productCtrl',['$scope','$location','productService', function ($scope,$location,productService) {
    $(".nav").find(".active").removeClass("active");
    $(".nav").find("#link_store").addClass("active");
    var productId = Number($location.path()[$location.path().length - 1]);
    $scope.selectedProduct = productService.getProductId(productId);
    $scope.redirectToStore = function(){
        $location.path("/store");
    }
    /*if($scope.selectedProduct == undefined){
        $location.path('/store');
    }*/
}]);