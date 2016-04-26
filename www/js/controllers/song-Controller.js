angular.module('app.songController', [])

.controller('songCtrl', function($scope, songService) {
  $scope.Songs = [];

  $scope.getAllSongs = function(){
    songService.getAllSongs()
    .success(function(data){
      $scope.Songs = data;
    });
  };

  $scope.addSong = function(song){
    console.log('11111111',song);
    songService.addSong(song)
    .success(function(data){
      console.log(55555555 , data);

    });
  };

});