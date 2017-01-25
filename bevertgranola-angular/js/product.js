app.controller('productCtrl',function ($scope,$location,$stateParams,product) {
    $(".nav").find(".active").removeClass("active");
    $(".nav").find("#link_store").addClass("active");
    
    var productId = Number($location.path()[$location.path().length - 1]);
    $scope.selectedProduct = product;
    $scope.options = product.options != ""? JSON.parse(product.options.replace(/'/g,'"')):"";
    $scope.hasOptions = product.options != ""?true:false;
    $scope.displayProductImage = $scope.selectedProduct.image;
    $scope.listImageDetails = getDetailsImages($scope.selectedProduct.detailsimages);
    $scope.showImageDetail = $scope.listImageDetails.length > 0?true:false;
    $scope.quantity = 1;
    $scope.optionValue = $scope.options != ""?$scope.options.options.split('|'):"";
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
});