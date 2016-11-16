app.controller('storeCtrl',['$scope','$location', 'productService', function ($scope,$location,productService) {
    $(".nav").find(".active").removeClass("active");
    $(".nav").find("#link_store").addClass("active");
    $scope.products = productService.getProductsList();
    $scope.selectproduct = function(id){
       var elementPos = $scope.products.map(function(x){return x.id;}).indexOf(id);
       productService.setSelectedProduct($scope.products[elementPos]);
       $location.path('/store/'+id);
   }
}]);