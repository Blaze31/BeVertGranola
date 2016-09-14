var beVertGranolaApp = angular.module('beVertGranolaApp', [
    'ngRoute'
]);

beVertGranolaApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // Home
    .when("/", {
        templateUrl: "partials/about.html", 
        controller: "PageCtrl"
    })
    // Pages
    .when("/about", {
        templateUrl: "partials/about.html", 
        controller: "PageCtrl"})
    /* etc… routes to other pages… */

    // else 404
    .otherwise("/404", {
        templateUrl: "partials/404.html",
        controller: "PageCtrl"});
}]);

beVertGranolaApp.controller('PageCtrl', function (/* $scope, $location, $http */) {
    console.log("Page Controller reporting for duty.");
});

beVertGranolaApp.controller('PageController', function PhoneListController($scope) {
    $scope.phones = [
      {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
      }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
      }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
      }
    ];
});