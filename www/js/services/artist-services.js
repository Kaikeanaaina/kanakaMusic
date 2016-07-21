angular.module('app.artistServices', [])

.service('artistService', ['$http',function($http){
  var isCordovaApp = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
  var domain;
  if(!isCordovaApp){
    domain = 'http://localhost:4000';
  }
  if(isCordovaApp){
    domain = '.';
  }

  this.getAllArtists = function(){
    return $http.get(domain + '/artists');
  };

  this.getArtist = function(artistName){
    return $http.get(domain + '/artists/' + artistName);
  };

}]);
