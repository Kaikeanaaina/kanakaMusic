angular.module('app.songController', [])

.controller('songCtrl', function($scope, songService) {
  $scope.Songs = [];

 console.log('11111 the controller works');

  $scope.getAllSongs = function(){
    console.log('222222222');
    songService.getAllSongs()
    .success(function(data){
      console.log(66666666);
      $scope.Songs = data;
    });
  };

  $scope.addSong = function(){
    console.log('3333333333');
    songService.addSong()
    .success(function(data){
      console.log('6666666666');

    });
  };

});