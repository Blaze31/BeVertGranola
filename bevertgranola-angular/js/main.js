

var app = angular.module('beVertGranolaApp', [
  'ui.router',
  'ui.bootstrap'
])
.factory('productService', function ($http, $q) {
  var config = {
    data:'',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    }
  }
    var json = $http.get('/products.json',config)
    .then(function (response) {
      return response.data;
    });

    return {
      query: function() {
        return json;
      },
      get: function(id) {
        var q = $q.defer();

        json.then(function (items) {
          angular.forEach(items, function (item) {
            if (id == item.id) {
              q.resolve(item);
              return;
            }
          })
        });

        return q.promise;
      },

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
      url:'/store/{id}',
      templateUrl: '../partials/product.html',
      controller: 'productCtrl',
      resolve: {
        product: function($q, $stateParams, productService){
          var def = $q.defer();
          productService.get($stateParams.id).then(function(data){
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
    //console.log('Snipcart popup is visible');
});
Snipcart.subscribe('cart.closed', function() {
    //console.log('Snipcart popup has been closed');
});
Snipcart.api.cart.currency('cad');
