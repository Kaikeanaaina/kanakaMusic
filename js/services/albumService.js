"use strict";

angular.module('myApp')
  .service('AlbumService', ['$http', function($http){

    this.getAllAlbums = function(){
      return $http.get('/album');
    };
    this.postNewAlbum = function(album){
      return $http.post('/album', album);
    };


}]);