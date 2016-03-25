"use strict";

angular.module('myApp')
  .service('RecordLabelService', ['$http', function($http){

    this.getAllRecordLabels = function(){
      return $http.get('/recordLabel');
    };
    this.postNewRecordLabel = function(recordLabel){
      return $http.post('/recordLabel', recordLabel);
    };


}]);