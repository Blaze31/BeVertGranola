var app = angular.module('beVertGranolaApp', [
  'ui.router',
  'ui.bootstrap'
])
.factory('productService', function ($http, $q) {
        var productsLists = [];
        var selectedProduct = {};
        var products = $http.get('../products.json').then(function(response){
            productsLists = response.data;
            return response.data;
          });

        return {
          query: function(){
            return products;
          },
          getProductsList: function(){
            return productsLists
          },
          getSelectedProduct: function () {
              return selectedProduct;
          },
          setSelectedProduct: function(value) {
              selectedProduct = value;
          },
          getProductId: function(id){
             var indexes = $.map(productsLists, function(obj, index) {
                if(obj.id == id) {
                    return index;
                }
            });
            return productsLists[indexes];
          }
        };
});

app.config(function($stateProvider,$urlRouterProvider,$locationProvider){
  $urlRouterProvider.rule(function ($injector, $location) {
    var path = $location.path();
    var match = path.match(/(.*)!\/{0,1}$/);

    if (match) {
      return match[1];
    }
  });
  $urlRouterProvider.when('', '/about');
  $stateProvider
    .state('about', {
      url:'/about',
      templateUrl: '../partials/about.html',
      controller: 'PageCtrl'
    })
    .state('store', {
      url:'/store',
      templateUrl: '../partials/store.html',
      controller: 'storeCtrl',
      resolve: {
        products: function($q, productService){
          var def = $q.defer();
          productService.query().then(function(data){
            def.resolve(data);
          });
          return def.promise;
        }
      }
    })
    .state('product', {
      url:'/store/:id',
      templateUrl: '../partials/product.html',
      controller: 'productCtrl',
      resolve: {
        products: function($q, productService){
          var def = $q.defer();
          productService.query().then(function(data){
            def.resolve(data);
          });
          return def.promise;
        }
      }
    });

});
app.run(function($rootScope) {
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
app.controller('PageCtrl', ['$scope','$location', function ( $scope, $location) {
  var path = $location.path();
  setActiveLink(path.replace("/",""),$location);

  function setActiveLink(path,$location){
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
Snipcart.api.cart.currency('cad');