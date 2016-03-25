"use strict";

angular.module('myApp')
  .service('SongService', ['$http', function($http){
    this.getSongs = function(){
      return $http.get('/song');
    };
    this.getOneSong = function(songId){
      return $http.get('/song/'+songId);
    };
    this.postNewSong = function(song){
      return $http.post('/song', song);
    };
    this.editOneSong = function(song){
      return $http.put('/song/'+song.routeParams, song);
    };
    this.deleteSong = function(songId){
      return $http.delete('/song/'+songId);
    };


  }]);