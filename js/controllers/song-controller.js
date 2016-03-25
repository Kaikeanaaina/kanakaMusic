"use strict";

angular.module('myApp')
.controller('SongController', ['$scope', 'SongService', '$rootScope', '$location', '$localStorage', '$routeParams', function($scope, SongService, $rootScope, $location, $localStorage, $routeParams){
  $scope.Songs = [];
  $scope.Song = null;


  $scope.SongService = SongService;

  $scope.getAllSongs = function(){
    SongService.getSongs()
    .success(function(data){
      $scope.Songs = data;
    });
  };

  $scope.getOneSong = function(){
    SongService.getOneSong($routeParams.id)
    .success(function(data){
      $scope.Song = data;
    });
  };

  $scope.getOneSongToEdit = function(){
    SongService.getOneSong($routeParams.id)
    .success(function(data){
      $scope.Song = data;
    });
  };

  $scope.editSong = function(song){
    if(song===undefined){
      return $location.url('/song/' + $routeParams.id);
    }
    song.routeParams = $routeParams.id;
    SongService.editOneSong(song)
    .success(function(data){
      $scope.Song = data;
      $location.url('/song/' + data.urlTitle);
    });
  };


  $scope.postButton=function(song) {
    SongService.postNewSong(song)
      .then(function(song) {
        $scope.add_product = false;
        $location.url('/song/'+song.data.urlTitle);
    });
  };
  $scope.deleteSong = function(songId) {
    SongService.deleteSong(songId)
    .then(function(data) {
      SongService.getSongs()
      .success(function(songs){
        $scope.Songs = songs;
        $location.url('/');
      });
    });
  };

















}]);