var app = angular.module("myApp");

app.controller("MapCtrl", function($scope, $location, $timeout, EventFactory){
  $scope.event = EventFactory.getSelectedEvent();
});