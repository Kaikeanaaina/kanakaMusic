"use strict";

angular.module('myApp')
.controller('PublisherController', ['$scope', 'PublisherService', '$rootScope', '$location', '$localStorage', '$routeParams', function($scope, PublisherService, $rootScope, $location, $localStorage, $routeParams){
  $scope.Publishers = [];
  $scope.Publisher = null;

  $scope.getAllPublishers = function(){
    PublisherService.getAllPublishers()
    .success(function(data){
      $scope.Publishers = data;
    });
  };

  $scope.getPublisher = function(publisher){
    // RecordLabelService.getRecordLabel(recordLabel)
    // .success(function(data){

    // });
  };

  $scope.postNewPublisher = function(publisher){
    PublisherService.postNewPublisher(publisher)
    .success(function(data){
      $scope.Publisher = data;
      $scope.publisherFieldset = false;
      $scope.getAllPublishers();
    });
  };



}]);