app.controller('productCtrl',['$scope','$location','productService', function ($scope,$location,productService) {
    $(".nav").find(".active").removeClass("active");
    $(".nav").find("#link_store").addClass("active");
    var productId = Number($location.path()[$location.path().length - 1]);
    $scope.selectedProduct = productService.getProductId(productId);
    $scope.quantity = 1;
    $scope.redirectToStore = function(){
        $location.path("/store");
        $("#cart").fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
        $scope.toggleModal();
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
    }
    $scope.toggleModal = function(){
        $('#myModal').modal('toggle');
    }
}]);