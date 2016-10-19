app.directive('header', function(){
    return {
        templateUrl: "../templates/header.html",
        controller: ['$scope', '$filter', function ($scope, $filter) {
            $(".nav a").on("click", function(){
                $(".nav").find(".active").removeClass("active");
                $(this).addClass("active");
            });
        }]
    }
});