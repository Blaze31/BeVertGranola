var app = angular.module('beVertGranolaApp', [
  'ngRoute',
  'ui.bootstrap'
])
.factory('productService', function ($http, $q) {
        var selectedProduct = '';
        var productsList = [];

        function init(){
          $http.get('../products.json').then(function(response){
            productsList = response.data;
          });
        }
        return {
            initProductService: function(){
              init();
            },
            getSelectedProduct: function () {
                return selectedProduct;
            },
            setSelectedProduct: function(value) {
                selectedProduct = value;
            },
            getProductsList: function(){
              return productsList;
            },
            getProductId: function(id){
              var elementPos = productsList.map(function(x){return x.id;}).indexOf(id);
              return productsList[elementPos];
            }
        };
});

app.config(['$locationProvider','$routeProvider', function ($locationProvider,$routeProvider,productService) {
  $locationProvider.hashPrefix('').html5Mode(true);
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/!/", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    //.when("/about!/", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/store", {templateUrl: "partials/store.html", controller: "PageCtrl", resolve: {products:function(productService){return productService.initProductService(); }}})
    //.when("/store!/", {templateUrl: "partials/store.html", controller: "PageCtrl", resolve: {products:function(productService){return productService.getProductsList(); }}})
    .when("/store/:id", {templateUrl: "partials/product.html", controller: "PageCtrl", resolve: {products:function(productService){return productService.initProductService(); }}})
    // else 404
    //.otherwise("/", {templateUrl: "partials/about.html", controller: "PageCtrl"});
}]);

app.controller('PageCtrl', ['$scope','$location','$http','productService', function ( $scope, $location, $http, productService) {
  var path = $location.path();
  setActiveLink(path.replace("/",""),$location);

  function setActiveLink(path,$location){
    /*if(path.indexOf('!') > -1){
      var pos = path.indexOf('!');
      var newPath = path.substring(0,pos);
      path = newPath
      $location.path(newPath);
    }*/
    if(path == "" || path=='/' || path.indexOf('about') > -1){
      path ='about';
    }
    if(path.indexOf('store') > -1){
      path = 'store';
    }
    if(path.indexOf('locations') > -1){
      path = 'locations';
    }
    if(path.indexOf('contact') > -1){
      path = 'contact';
    }
    var id = "#link_" + path;
    $(".nav").find(".active").removeClass("active");
    $(".nav").find(id).addClass("active");
  }
}]);

Snipcart.subscribe('cart.opened', function() {
    console.log('Snipcart popup is visible');
});
Snipcart.subscribe('cart.closed', function() {
    console.log('Snipcart popup has been closed');
});