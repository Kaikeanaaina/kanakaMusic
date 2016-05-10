
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
    artistService.getAllArtists()
    .success(function(data){

      for(var i = 0;i<data.length;i++){
        var splitName = data[i].name.toUpperCase().split("");
        if(splitName[0]==="A"){
          $scope.AArtist.push(data[i]);
        } else if(splitName[0]==="B"){
          $scope.BArtist.push(data[i]);
        } else if(splitName[0]==="C"){
          $scope.CArtist.push(data[i]);
        } else if(splitName[0]==="D"){
          $scope.DArtist.push(data[i]);
        } else if(splitName[0]==="E"){
          $scope.EArtist.push(data[i]);
        } else if(splitName[0]==="F"){
          $scope.FArtist.push(data[i]);
        } else if(splitName[0]==="G"){
          $scope.GArtist.push(data[i]);
        } else if(splitName[0]==="H"){
          $scope.HArtist.push(data[i]);
        } else if(splitName[0]==="I"){
          $scope.IArtist.push(data[i]);
        } else if(splitName[0]==="J"){
          $scope.JArtist.push(data[i]);
        } else if(splitName[0]==="K"){
          $scope.KArtist.push(data[i]);
        } else if(splitName[0]==="L"){
          $scope.MArtist.push(data[i]);
        } else if(splitName[0]==="M"){
          $scope.MArtist.push(data[i]);
        } else if(splitName[0]==="N"){
          $scope.NArtist.push(data[i]);
        } else if(splitName[0]==="O"){
          $scope.OArtist.push(data[i]);
        } else if(splitName[0]==="P"){
          $scope.PArtist.push(data[i]);
        } else if(splitName[0]==="Q"){
          $scope.QArtist.push(data[i]);
        } else if(splitName[0]==="R"){
          $scope.RArtist.push(data[i]);
        } else if(splitName[0]==="S"){
          $scope.SArtist.push(data[i]);
        } else if(splitName[0]==="T"){
          $scope.TArtist.push(data[i]);
        } else if(splitName[0]==="U"){
          $scope.UArtist.push(data[i]);
        } else if(splitName[0]==="V"){
          $scope.VArtist.push(data[i]);
        } else if(splitName[0]==="W"){
          $scope.WArtist.push(data[i]);
        } else if(splitName[0]==="X"){
          $scope.XArtist.push(data[i]);
        } else if(splitName[0]==="Y"){
          $scope.YArtist.push(data[i]);
        } else if(splitName[0]==="Z"){
          $scope.ZArtist.push(data[i]);
        } else {
          $scope.NumberArtist.push(data[i]);
        }
      }
    });
  };


  $scope.addArtist = function(artist){

    if(!artist.name){
      console.log('there need to be a artist name property');
      return $location.url('/side-menu/addNewArtist');
    }

    if(artist.name.length===0 || artist=== null || artist === undefined){
      console.log('there needs to be value in name');
      return $location.url('/side-menu/addNewArtist');
    }

    artistService.addArtist(artist)
    .success(function(data){
      $scope.getAllArtists();

      //*********ATTENTION*************
            //*********ATTENTION*************
                  //*********ATTENTION*************
                        //*********ATTENTION*************
                              //*********ATTENTION*************
      // can't figure out if i like how it doesn't refresh
      // if it doesn't refrest after adding a song
        //it might be good so the home page doesn't mess up if you lose connection
        // then again you should add a song without internet connection
      //if it does refresh after adding a song
        //it will be up to date realtime
       return $location.url('/side-menu/home/artists');
    });
  };






console.log('this is the artist controller');
});