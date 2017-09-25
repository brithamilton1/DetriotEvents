var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/',{
       templateUrl: 'questions.html',
       controller: 'QuestionCtrl'
     })

    .when('/category',{
        templateUrl: 'category.html',
        controller: 'EventCtrl'
     })

     .when('/map',{
        templateUrl: 'map.html',
        controller: 'MapCtrl'
     })

    .otherwise({
    redirectTo: '/'
});

$locationProvider.hashPrefix('');

});
