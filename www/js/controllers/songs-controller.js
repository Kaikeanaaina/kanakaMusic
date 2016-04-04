angular.module('starter.controllers', [])


.controller('SongsController', function($scope, SongsService) {
  console.log(11111111111);
  SongsService.getAllSongs();
  // .success(function(data){

  // });

  // $scope.songs = [
  //   { title: 'Reggae', id: 1 },
  //   { title: 'Chill', id: 2 },
  //   { title: 'Dubstep', id: 3 },
  //   { title: 'Indie', id: 4 },
  //   { title: 'Rap', id: 5 },
  //   { title: 'Cowbell', id: 6 }
  // ];
});