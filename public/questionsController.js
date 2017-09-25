var app = angular.module('myApp');
var  questions = [
  {category: "performingArts", question: "Do you like performing arts?"},
  {category: "performingArts", question: "Want to see a broadway show in Detroit?"},
  {category: "performingArts", question: "Ready to seeing performing arts?"},
  {category: "sports", question: "Do you want to cheer on your favorite teams?"},
  {category: "sports", question: "Do you want to meet your favorite mascot?"},
  {category: "sports", question: "Do you like sports?"},
  {category: "music", question: "Do you like music?"},
  {category: "music", question: "Do you want to crowdsurf?"},
  {category: "music", question: "Ready to see your favorite band?"},
];

app.controller('QuestionCtrl', function($scope, $location, $timeout, EventFactory){
  $scope.showLogo = true; 
  $timeout(function(){
    $scope.showLogo = false;
  },5000)
    $scope.randomizer = questions[Math.floor(Math.random()*questions.length)];
    $scope.save = function(category){
      EventFactory.saveCategory(category);
      $timeout(function(){$location.path("/category")});
    }
    $scope.pick = function(){
      $scope.randomizer = questions[Math.floor(Math.random()*questions.length)]
    }
   
});



