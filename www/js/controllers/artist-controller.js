
angular.module('app.artistController', [])


.controller('artistCtrl', function($scope, $location, artistService) {

  $scope.NumberArtist = [];
  $scope.Artist = [];
  $scope.AArtist = [];
  $scope.BArtist = [];
  $scope.CArtist = [];
  $scope.DArtist = [];
  $scope.EArtist = [];
  $scope.FArtist = [];
  $scope.GArtist = [];
  $scope.HArtist = [];
  $scope.IArtist = [];
  $scope.JArtist = [];
  $scope.KArtist = [];
  $scope.LArtist = [];
  $scope.MArtist = [];
  $scope.NArtist = [];
  $scope.OArtist = [];
  $scope.PArtist = [];
  $scope.QArtist = [];
  $scope.RArtist = [];
  $scope.SArtist = [];
  $scope.TArtist = [];
  $scope.UArtist = [];
  $scope.VArtist = [];
  $scope.WArtist = [];
  $scope.XArtist = [];
  $scope.YArtist = [];
  $scope.ZArtist = [];

  $scope.getAllArtists = function(){
    console.log('1111111');
    artistService.getAllArtists()
    .success(function(data){
      console.log('555555555');

      for(var i = 0;i<data.length;i++){
        var splitTitle = data[i].title.toUpperCase().split("");
        if(splitTitle[0]==="A"){
          $scope.AArtist.push(data[i]);
        } else if(splitTitle[0]==="B"){
          $scope.BArtist.push(data[i]);
        } else if(splitTitle[0]==="C"){
          $scope.CArtist.push(data[i]);
        } else if(splitTitle[0]==="D"){
          $scope.DArtist.push(data[i]);
        } else if(splitTitle[0]==="E"){
          $scope.EArtist.push(data[i]);
        } else if(splitTitle[0]==="F"){
          $scope.FArtist.push(data[i]);
        } else if(splitTitle[0]==="G"){
          $scope.GArtist.push(data[i]);
        } else if(splitTitle[0]==="H"){
          $scope.HArtist.push(data[i]);
        } else if(splitTitle[0]==="I"){
          $scope.IArtist.push(data[i]);
        } else if(splitTitle[0]==="J"){
          $scope.JArtist.push(data[i]);
        } else if(splitTitle[0]==="K"){
          $scope.KArtist.push(data[i]);
        } else if(splitTitle[0]==="L"){
          $scope.MArtist.push(data[i]);
        } else if(splitTitle[0]==="M"){
          $scope.MArtist.push(data[i]);
        } else if(splitTitle[0]==="N"){
          $scope.NArtist.push(data[i]);
        } else if(splitTitle[0]==="O"){
          $scope.OArtist.push(data[i]);
        } else if(splitTitle[0]==="P"){
          $scope.PArtist.push(data[i]);
        } else if(splitTitle[0]==="Q"){
          $scope.QArtist.push(data[i]);
        } else if(splitTitle[0]==="R"){
          $scope.RArtist.push(data[i]);
        } else if(splitTitle[0]==="S"){
          $scope.SArtist.push(data[i]);
        } else if(splitTitle[0]==="T"){
          $scope.TArtist.push(data[i]);
        } else if(splitTitle[0]==="U"){
          $scope.UArtist.push(data[i]);
        } else if(splitTitle[0]==="V"){
          $scope.VArtist.push(data[i]);
        } else if(splitTitle[0]==="W"){
          $scope.WArtist.push(data[i]);
        } else if(splitTitle[0]==="X"){
          $scope.XArtist.push(data[i]);
        } else if(splitTitle[0]==="Y"){
          $scope.YArtist.push(data[i]);
        } else if(splitTitle[0]==="Z"){
          $scope.ZArtist.push(data[i]);
        } else {
          $scope.NumberArtist.push(data[i]);
        }
      }
    });
  };

console.log('this is the artist controller');
});