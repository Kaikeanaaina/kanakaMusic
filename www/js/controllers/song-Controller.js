angular.module('app.songController', [])

.controller('songCtrl', function($scope,$location, songService) {
  $scope.Songs = [];

  $scope.getAllSongs = function(){
    songService.getAllSongs()
    .success(function(data){
      $scope.Songs = data;
    });
  };

  $scope.addSong = function(song){
    songService.addSong(song)
    .success(function(data){
      $location.url('/');
    });
  };

});