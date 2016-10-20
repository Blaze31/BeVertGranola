var app = angular.module('beVertGranolaApp', [
  'ngRoute',
  'ui.bootstrap'
]);

app.config(['$locationProvider','$routeProvider', function ($locationProvider,$routeProvider) {
  $locationProvider.hashPrefix();
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/store", {templateUrl: "partials/store.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

app.controller('PageCtrl', function ( $scope, $location, $http ) {
  setActiveLink($location.path().replace("/",""));
  
  
  function setActiveLink(path){
    var id = "#link_" + path;
    $(".nav").find(id).addClass("active");
  }
});