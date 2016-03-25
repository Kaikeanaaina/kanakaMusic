"use strict";

angular.module('myApp')
.controller('ArtistController', ['$scope', 'ArtistService', '$rootScope', '$location', '$localStorage', '$routeParams', function($scope, ArtistService, $rootScope, $location, $localStorage, $routeParams){
  $scope.Artists = [];
  $scope.Artist = null;

  $scope.getAllArtists = function(){
    ArtistService.getAllArtists()
    .success(function(artists){
      $scope.Artists = artists;
    });
  };

  $scope.postNewArtist = function(artist){
    ArtistService.postNewArtist(artist)
    .success(function(artist){
      $scope.Artist = artist;
      $scope.artistFieldset = false;
      $scope.getAllArtists();
    });
  };

}]);