var app = angular.module('beVertGranolaApp', [
  'ngRoute',
  'ui.bootstrap'
])
.factory('productService', function () {
        var selectedProduct = '';
        var productsList = [{id: 1, img:'../images/sac_02.jpg',title:'Amandes & coco', price:'12.00 $'},
                            {id: 2,img:'../images/sac_02.jpg',title:'Érables & pacanes', price:'12.00 $'}];

        return {
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

app.config(['$locationProvider','$routeProvider', function ($locationProvider,$routeProvider) {
  $locationProvider.hashPrefix();
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/store", {templateUrl: "partials/store.html", controller: "PageCtrl"})
    .when("/store/:id", {templateUrl: "partials/product.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

app.controller('PageCtrl', function ( $scope, $location, $http ) {
  setActiveLink($location.path().replace("/",""));
  
  
  function setActiveLink(path){
    if(path == "" || path=='/'){
      path ='about';
    }
    if(path.indexOf('store') > -1){
      path = 'store';
    }
    var id = "#link_" + path;
    $(".nav").find(id).addClass("active");
  }
});