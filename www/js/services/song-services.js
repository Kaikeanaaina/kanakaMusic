angular.module('app.songServices', [])

.service('songService', ['$http',function($http){
  var isCordovaApp = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
  var domain;
  if(!isCordovaApp){
    domain = 'http://localhost:4001';
  }
  if(isCordovaApp){
    domain = '.';
  }

  this.getAllSongs = function(){
    return $http.get(domain + '/songs');
  };

  this.getSong = function(songTitle){
    return $http.get(domain + '/songs/' + songTitle);
  };

  this.getSpecificSongsFromArtist = function(ArtistId){
    return $http.get(domain + '/songs/ofArtist/' + ArtistId);
  };

  this.getSpecificSongsFromAlbum = function(AlbumId){
    return $http.get(domain + '/songs/ofAlbum/' + AlbumId);
  };

}]);

