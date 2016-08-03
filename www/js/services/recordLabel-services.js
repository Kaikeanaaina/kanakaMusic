angular.module('app.recordLabelServices', [])

.service('recordLabelService', ['$http',function($http){
  var isCordovaApp = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
  var domain;
  if(!isCordovaApp){
    domain = 'http://localhost:4001';
  }
  if(isCordovaApp){
    domain = '.';
  }

  this.getAllRecordLabels = function(){
    return $http.get(domain + '/recordLabels');
  };

  this.getRecordLabel = function(recordLabelName){
    return $http.get(domain + '/recordLabels/' + recordLabelName);
  };

}]);