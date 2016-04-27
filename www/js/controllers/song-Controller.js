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

      for(var i = 0;i<data.length;i++){
        var splitTitle = data[i].title.toUpperCase().split("");
        if(splitTitle[0]==="A"){
          $scope.ASong.push(data[i]);
        } else if(splitTitle[0]==="B"){
          $scope.BSong.push(data[i]);
        } else if(splitTitle[0]==="C"){
          $scope.CSong.push(data[i]);
        } else if(splitTitle[0]==="D"){
          $scope.DSong.push(data[i]);
        } else if(splitTitle[0]==="E"){
          $scope.ESong.push(data[i]);
        } else if(splitTitle[0]==="F"){
          $scope.FSong.push(data[i]);
        } else if(splitTitle[0]==="G"){
          $scope.GSong.push(data[i]);
        } else if(splitTitle[0]==="H"){
          $scope.HSong.push(data[i]);
        } else if(splitTitle[0]==="I"){
          $scope.ISong.push(data[i]);
        } else if(splitTitle[0]==="J"){
          $scope.JSong.push(data[i]);
        } else if(splitTitle[0]==="K"){
          $scope.KSong.push(data[i]);
        } else if(splitTitle[0]==="L"){
          $scope.MSong.push(data[i]);
        } else if(splitTitle[0]==="M"){
          $scope.MSong.push(data[i]);
        } else if(splitTitle[0]==="N"){
          $scope.NSong.push(data[i]);
        } else if(splitTitle[0]==="O"){
          $scope.OSong.push(data[i]);
        } else if(splitTitle[0]==="P"){
          $scope.PSong.push(data[i]);
        } else if(splitTitle[0]==="Q"){
          $scope.QSong.push(data[i]);
        } else if(splitTitle[0]==="R"){
          $scope.RSong.push(data[i]);
        } else if(splitTitle[0]==="S"){
          $scope.SSong.push(data[i]);
        } else if(splitTitle[0]==="T"){
          $scope.TSong.push(data[i]);
        } else if(splitTitle[0]==="U"){
          $scope.USong.push(data[i]);
        } else if(splitTitle[0]==="V"){
          $scope.VSong.push(data[i]);
        } else if(splitTitle[0]==="W"){
          $scope.WSong.push(data[i]);
        } else if(splitTitle[0]==="X"){
          $scope.XSong.push(data[i]);
        } else if(splitTitle[0]==="Y"){
          $scope.YSong.push(data[i]);
        } else if(splitTitle[0]==="Z"){
          $scope.ZSong.push(data[i]);
        } else {
          $scope.NumberSong.push(data[i]);
        }
      }
    });
  };

  $scope.addSong = function(song){
    songService.addSong(song)
    .success(function(data){
      $scope.getAllSongs();
      // var splitNewSongTitle= data.title.toUpperCase().split("");
      // if(splitNewSongTitle[0]==="A"){
      //     $scope.ASong.push(data);
      //   } else if(splitNewSongTitle[0]==="B"){
      //     $scope.BSong.push(data);
      //   } else if(splitNewSongTitle[0]==="C"){
      //     $scope.CSong.push(data);
      //   } else if(splitNewSongTitle[0]==="D"){
      //     $scope.DSong.push(data);
      //   } else if(splitNewSongTitle[0]==="E"){
      //     $scope.ESong.push(data);
      //   } else if(splitNewSongTitle[0]==="F"){
      //     $scope.FSong.push(data);
      //   } else if(splitNewSongTitle[0]==="G"){
      //     $scope.GSong.push(data);
      //   } else if(splitNewSongTitle[0]==="H"){
      //     $scope.HSong.push(data);
      //   } else if(splitNewSongTitle[0]==="I"){
      //     $scope.ISong.push(data);
      //   } else if(splitNewSongTitle[0]==="J"){
      //     $scope.JSong.push(data);
      //   } else if(splitNewSongTitle[0]==="K"){
      //     $scope.KSong.push(data);
      //   } else if(splitNewSongTitle[0]==="L"){
      //     $scope.MSong.push(data);
      //   } else if(splitNewSongTitle[0]==="M"){
      //     $scope.MSong.push(data);
      //   } else if(splitNewSongTitle[0]==="N"){
      //     $scope.NSong.push(data);
      //   } else if(splitNewSongTitle[0]==="O"){
      //     $scope.OSong.push(data);
      //   } else if(splitNewSongTitle[0]==="P"){
      //     $scope.PSong.push(data);
      //   } else if(splitNewSongTitle[0]==="Q"){
      //     $scope.QSong.push(data);
      //   } else if(splitNewSongTitle[0]==="R"){
      //     $scope.RSong.push(data);
      //   } else if(splitNewSongTitle[0]==="S"){
      //     $scope.SSong.push(data);
      //   } else if(splitNewSongTitle[0]==="T"){
      //     $scope.TSong.push(data);
      //   } else if(splitNewSongTitle[0]==="U"){
      //     $scope.USong.push(data);
      //   } else if(splitNewSongTitle[0]==="V"){
      //     $scope.VSong.push(data);
      //   } else if(splitNewSongTitle[0]==="W"){
      //     $scope.WSong.push(data);
      //   } else if(splitNewSongTitle[0]==="X"){
      //     $scope.XSong.push(data);
      //   } else if(splitNewSongTitle[0]==="Y"){
      //     $scope.YSong.push(data);
      //   } else if(splitNewSongTitle[0]==="Z"){
      //     $scope.ZSong.push(data);
      //   } else {
      //     $scope.NumberSong.push(data);
      //   }
      $location.url('/home');
    });
  };
});