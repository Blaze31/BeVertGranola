app.directive('header', function(){
    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') ) {
            $(this).collapse('hide');
        }
    });
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