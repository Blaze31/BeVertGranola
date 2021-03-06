app.controller('carouselCtrl',['$scope', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;
  var images = ['../images/diapo_06.jpg','../images/diapo_04.jpg','../images/diapo_05.jpg'];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: images[currIndex],
      //text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
     id: currIndex++
    });
  };
  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };
  for (var i = 0; i < 3; i++) {
    $scope.addSlide();
  }
  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
}]);

app.controller('aboutCtrl',['$scope',function($scope){
  $scope.redirect = function(path){
    if(path =="facebook"){
      window.open('https://www.facebook.com/bevertgranola','_blank');
    }
    if(path == 'instagram'){
       window.open('https://www.instagram.com/bevert_granola/','_blank');
    }
    if(path == 'pinterest'){
      window.open('https://www.pinterest.com/bevertgrano1923/?etslf=7911&eq=be%20vert%20','_blank');
    }
  }
}]);