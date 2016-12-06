app.controller('storeCtrl',function ($scope,$location,products) {
    $(".nav").find(".active").removeClass("active");
    $(".nav").find("#link_store").addClass("active");
    $scope.products = products;
});