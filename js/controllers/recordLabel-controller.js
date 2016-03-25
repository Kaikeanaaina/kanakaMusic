"use strict";

angular.module('myApp')
.controller('RecordLabelController', ['$scope', 'RecordLabelService', '$rootScope', '$location', '$localStorage', '$routeParams', function($scope, RecordLabelService, $rootScope, $location, $localStorage, $routeParams){
  $scope.RecordLabels = [];
  $scope.RecordLabel = null;

  $scope.getAllRecordLabels = function(){
    RecordLabelService.getAllRecordLabels()
    .success(function(data){
      $scope.RecordLabels = data;
    });
  };

  $scope.getRecordLabel = function(recordLabel){
    // RecordLabelService.getRecordLabel(recordLabel)
    // .success(function(data){

    // });
  };

  $scope.postNewRecordLabel = function(recordLabel){
    RecordLabelService.postNewRecordLabel(recordLabel)
    .success(function(data){
      $scope.RecordLabel = data;
      $scope.recordLabelFieldset = false;
      $scope.getAllRecordLabels();
    });
  };


}]);