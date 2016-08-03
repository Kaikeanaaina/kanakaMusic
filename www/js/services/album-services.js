angular.module('app.albumServices', [])

.service('albumService', ['$http',function($http){
  var isCordovaApp = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
  var domain;
  if(!isCordovaApp){
    domain = 'http://localhost:4001';
  }
  if(isCordovaApp){
    domain = '.';
  }

  this.getAllAlbums = function(){
    return $http.get(domain + '/albums');
  };

  this.getAlbum = function(albumName){
    return $http.get(domain + '/albums/' + albumName);
  };

  this.getSpecificAlbums = function(ArtistId){
    return $http.get(domain + '/albums/ofArtist/' + ArtistId);
  };

}]);