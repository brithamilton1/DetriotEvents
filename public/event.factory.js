var app = angular.module("myApp");
app.factory('EventFactory', function($http){
  var postData;
  var currentCategory;
  var selectedEvent;


  return {
    getAnswers: getAnswers,
    saveCategory: saveCategory,
    getCategory: getCategory, 
    saveSelectedEvent: saveSelectedEvent,
    getSelectedEvent: getSelectedEvent
  };

  function saveCategory(category){
    currentCategory = category;
  }
  function getCategory(){
    return currentCategory;
  }

  function saveSelectedEvent(event){
    selectedEvent = event;
  }

  function getSelectedEvent(){
    return selectedEvent;
  }

  function getAnswers (){
    return $http.get(`api-event?app_key=cMG6K3XWNbCQbjfj&category=${currentCategory}&location=Detroit&date=Future`)
      .then(function(response){
        postData = response.data.events.event;
        return postData;
     });
  }
  });