app.controller('productCtrl',['$scope','$location','productService', function ($scope,$location,productService) {
    $(".nav").find(".active").removeClass("active");
    $(".nav").find("#link_store").addClass("active");
    var productId = Number($location.path()[$location.path().length - 1]);
    $scope.selectedProduct = productService.getProductId(productId);
    $scope.displayProductImage = $scope.selectedProduct.img;
    $scope.listImageDetails = getDetailsImages($scope.selectedProduct.detailsimages);
    $scope.showImageDetail = $scope.listImageDetails.length > 0?true:false;
    $scope.quantity = 1;
    $scope.redirectToStore = function(){
        $location.path("/store");
        $("#cart").fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
        $scope.toggleModal();
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
    }
    $scope.toggleModal = function(){
        $('#checkoutModal').modal('toggle');
    }
    $scope.setDisplayImage = function(image){
        $scope.displayProductImage = image.src;
    }
    function getDetailsImages(listImageSrcString){
        console.log(listImageSrcString == "");
        var returnListImagesObject = [];
        if(listImageSrcString == ""){
            return returnListImagesObject;
        }
        var listImageSrcArray = listImageSrcString.split(',');
        for(var i=0;i < listImageSrcArray.length;++i){
            var id = i;
            var obj = {id:id,src:listImageSrcArray[i]};
            returnListImagesObject.push(obj);
        }
        return returnListImagesObject;
    }
}]);