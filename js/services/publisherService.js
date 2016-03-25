"use strict";

angular.module('myApp')
  .service('PublisherService', ['$http', function($http){

    this.getAllPublishers = function(){
      return $http.get('/publisher');
    };
    this.postNewPublisher = function(publisher){
      return $http.post('/publisher', publisher);
    };


}]);