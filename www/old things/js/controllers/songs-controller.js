angular.module('kanakamusic.controllers', [])


.controller('SongsController', function($scope, SongsService) {
  $scope.Songs = [];

  $scope.getAllSongs = function(){
    SongsService.getAllSongs()
    .success(function(data){
      $scope.Songs = data;
    });
  };

  // $scope.addNewSong = function(song){
  //   console.log(111111111111);
  // };



});