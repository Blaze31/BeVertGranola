app.controller('productCtrl',['$scope','$location','productService', function ($scope,$location,productService) {
    $(".nav").find(".active").removeClass("active");
    $(".nav").find("#link_store").addClass("active");
    var productId = Number($location.path()[$location.path().length - 1]);
    console.log("productId:  " + productId);
    console.log(productService.getProductId(productId));
    $scope.selectedProduct = productService.getProductId(productId);
    /*if($scope.selectedProduct == undefined){
        $location.path('/store');
    }*/
}]);