angular.module('app.songController', [])

.controller('songCtrl', function($scope,$location, songService) {
  $scope.Songs = [];
  $scope.NumberSong = [];
  $scope.ASong = [];
  $scope.BSong = [];
  $scope.CSong = [];
  $scope.DSong = [];
  $scope.ESong = [];
  $scope.FSong = [];
  $scope.GSong = [];
  $scope.HSong = [];
  $scope.ISong = [];
  $scope.JSong = [];
  $scope.KSong = [];
  $scope.LSong = [];
  $scope.MSong = [];
  $scope.NSong = [];
  $scope.OSong = [];
  $scope.PSong = [];
  $scope.QSong = [];
  $scope.RSong = [];
  $scope.SSong = [];
  $scope.TSong = [];
  $scope.USong = [];
  $scope.VSong = [];
  $scope.WSong = [];
  $scope.XSong = [];
  $scope.YSong = [];
  $scope.ZSong = [];


  $scope.getAllSongs = function(){
    songService.getAllSongs()
    .success(function(data){
      console.log(1111111111, data);

      for(var i = 0;i<data.length;i++){
        var splitTitle = data[i].title.toUpperCase().split("");
        console.log(2222222,splitTitle);
        if(splitTitle[0]==="A"){
          $scope.ASong.push(data[i]);
          console.log(33333333, $scope.ASong);
        } else if(splitTitle[0]==="B"){
          $scope.BSong.push(data[i]);
          console.log(33333333, $scope.BSong);
        } else if(splitTitle[0]==="C"){
          $scope.CSong.push(data[i]);
          console.log(33333333, $scope.CSong);
        } else if(splitTitle[0]==="D"){
          $scope.DSong.push(data[i]);
          console.log(33333333, $scope.DSong);
        } else if(splitTitle[0]==="E"){
          $scope.ESong.push(data[i]);
          console.log(33333333, $scope.ESong);
        } else if(splitTitle[0]==="F"){
          $scope.FSong.push(data[i]);
          console.log(33333333, $scope.FSong);
        } else if(splitTitle[0]==="G"){
          $scope.GSong.push(data[i]);
          console.log(33333333, $scope.GSong);
        } else if(splitTitle[0]==="H"){
          $scope.HSong.push(data[i]);
          console.log(33333333, $scope.HSong);
        } else if(splitTitle[0]==="I"){
          $scope.ISong.push(data[i]);
          console.log(33333333, $scope.ISong);
        } else if(splitTitle[0]==="J"){
          $scope.JSong.push(data[i]);
          console.log(33333333, $scope.JSong);
        } else if(splitTitle[0]==="K"){
          $scope.KSong.push(data[i]);
          console.log(33333333, $scope.KSong);
        } else if(splitTitle[0]==="L"){
          $scope.MSong.push(data[i]);
          console.log(33333333, $scope.MSong);
        } else if(splitTitle[0]==="M"){
          $scope.MSong.push(data[i]);
          console.log(33333333, $scope.MSong);
        } else if(splitTitle[0]==="N"){
          $scope.NSong.push(data[i]);
          console.log(33333333, $scope.NSong);
        } else if(splitTitle[0]==="O"){
          $scope.OSong.push(data[i]);
          console.log(33333333, $scope.OSong);
        } else if(splitTitle[0]==="P"){
          $scope.PSong.push(data[i]);
          console.log(33333333, $scope.PSong);
        } else if(splitTitle[0]==="Q"){
          $scope.QSong.push(data[i]);
          console.log(33333333, $scope.QSong);
        } else if(splitTitle[0]==="R"){
          $scope.RSong.push(data[i]);
          console.log(33333333, $scope.RSong);
        } else if(splitTitle[0]==="S"){
          $scope.SSong.push(data[i]);
          console.log(33333333, $scope.SSong);
        } else if(splitTitle[0]==="T"){
          $scope.TSong.push(data[i]);
          console.log(33333333, $scope.TSong);
        } else if(splitTitle[0]==="U"){
          $scope.USong.push(data[i]);
          console.log(33333333, $scope.USong);
        } else if(splitTitle[0]==="V"){
          $scope.VSong.push(data[i]);
          console.log(33333333, $scope.VSong);
        } else if(splitTitle[0]==="W"){
          $scope.WSong.push(data[i]);
          console.log(33333333, $scope.WSong);
        } else if(splitTitle[0]==="X"){
          $scope.XSong.push(data[i]);
          console.log(33333333, $scope.XSong);
        } else if(splitTitle[0]==="Y"){
          $scope.YSong.push(data[i]);
          console.log(33333333, $scope.YSong);
        } else if(splitTitle[0]==="Z"){
          $scope.ZSong.push(data[i]);
          console.log(33333333, $scope.ZSong);
        } else {
          $scope.NumberSong.push(data[i]);
          console.log(33333333, $scope.NumberSong);
        }
      }

      // data is an array of objects
      // go through the array
      // check the object's title
      // the title will be a string
      // split the string into an array of letters
      // start sorting the song into their areas

    });
  };

  $scope.addSong = function(song){
    songService.addSong(song)
    .success(function(data){
      $location.url('/');
    });
  };

});