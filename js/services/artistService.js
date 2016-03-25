"use strict";

angular.module('myApp')
  .service('ArtistService', ['$http', function($http){

    this.getAllArtists = function(){
      return $http.get('/artist');
    };
    this.postNewArtist = function(artist){
      return $http.post('/artist', artist);
    };


}]);