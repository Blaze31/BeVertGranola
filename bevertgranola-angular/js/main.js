var app = angular.module('beVertGranolaApp', [
  'ngRoute',
  'ui.bootstrap'
])
.factory('productService', function () {
        var selectedProduct = '';
        var productsList = [{id: 1, img:'../images/sac_02.jpg',ing:"../images/vn_01.jpg", title:'Amandes & coco', price:'12.00 $',weight:'300',url:'https://bevertgranola-406c1.firebaseapp.com/',description:'Amandes & coco'},
                            {id: 2,img:'../images/sac_02.jpg',ing:"../images/vn_02.jpg", title:'Érables & pacanes', price:'12.00 $',weight:'300',url:'https://bevertgranola-406c1.firebaseapp.com/',description:'Érables & pacanes'}];

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
    .when("/!/", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/about!/", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/store", {templateUrl: "partials/store.html", controller: "PageCtrl"})
    .when("/store!/", {templateUrl: "partials/store.html", controller: "PageCtrl"})
    .when("/store/:id", {templateUrl: "partials/product.html", controller: "PageCtrl"})
    // else 404
    //.otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

app.controller('PageCtrl', function ( $scope, $location, $http ) {
  var path = $location.path();
  setActiveLink(path.replace("/",""),$location);
  $('#hidden_1').hide();
  $('#hidden_2').hide();

  function setActiveLink(path,$location){
    if(path.indexOf('!') > -1){
      var pos = path.indexOf('!');
      var newPath = path.substring(0,pos);
      path = newPath
      $location.path(newPath);
    }
    if(path == "" || path=='/'){
      path ='about';
    }
    if(path.indexOf('store') > -1){
      path = 'store';
    }
    var id = "#link_" + path;
    $(".nav").find(".active").removeClass("active");
    $(".nav").find(id).addClass("active");
  }
});