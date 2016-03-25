"use strict";

angular.module('myApp')
.controller('AlbumController', ['$scope', 'AlbumService', '$rootScope', '$location', '$localStorage', '$routeParams', function($scope, AlbumService, $rootScope, $location, $localStorage, $routeParams){
  $scope.Albums = [];
  $scope.Album = null;

  $scope.getAllAlbums = function(){
    AlbumService.getAllAlbums()
    .success(function(data){
      $scope.Albums = data;
    });
  };

  $scope.getAlbum = function(album){
    // RecordLabelService.getRecordLabel(recordLabel)
    // .success(function(data){

    // });
  };

  $scope.postNewAlbum = function(album){
    AlbumService.postNewAlbum(album)
    .success(function(data){
      $scope.Album = data;
      $scope.albumFieldset = false;
      $scope.getAllAlbums();
    });
  };


}]);