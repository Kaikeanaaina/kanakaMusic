angular.module('app.songController', [])

.controller('songCtrl', function($scope,$location, songService) {

  $scope.Song = [];
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
      $location.url('/home');
    });
  };

  $scope.getSong = function(){
    var locationPath = $location.$$path;
    var splitLocationPath = locationPath.split("");
    splitLocationPath.splice(0,24);
    var finalLocationPath = splitLocationPath.join("");
    songService.getSong(encodeURI(finalLocationPath))
    .success(function(data){
      $scope.Song = data;
    });
  };

  $scope.getSongToEdit = function(){
    var locationPath = $location.$$path;
    var splitLocationPath = locationPath.split("");
    splitLocationPath.splice(0,21);
    var finalLocationPath = splitLocationPath.join("");
    songService.getSong(finalLocationPath)
    .success(function(data){
      $scope.Song = data;
    });
  };

  $scope.editSong = function(song){

    if(song===undefined || song === null){
      return $location.url('side-menu/song/content/'+ $scope.Song.title);
    }

    if(song.hasOwnProperty("title")){

      if(!song.hasOwnProperty("id")){
        song.id = $scope.Song.id;
      }
      if(!song.hasOwnProperty("ArtistId") || song.ArtistId.length===0){
        song.ArtistId = $scope.Song.AtistId;
      }
      if(!song.hasOwnProperty("AlbumId") || song.AlbumId.length===0){
        song.AlbumId = $scope.Song.AlbumId;
      }
      if(!song.hasOwnProperty("description") || song.description.length===0){
        song.description = $scope.Song.description;
      }
      if(!song.hasOwnProperty("line1") || song.line1.length===0){
        song.line1 = $scope.Song.line1;
      }
      if(!song.hasOwnProperty("line2") || song.line2.length===0){
        song.line2 = $scope.Song.line2;
      }
      if(!song.hasOwnProperty("line3") || song.line3.length===0){
        song.line3 = $scope.Song.line3;
      }
      if(!song.hasOwnProperty("line4") || song.line4.length===0){
        song.line4 = $scope.Song.line4;
      }
      if(!song.hasOwnProperty("line5") || song.line5.length===0){
        song.line5 = $scope.Song.line5;
      }
      if(!song.hasOwnProperty("line6") || song.line6.length===0){
        song.line6 = $scope.Song.line6;
      }
      if(!song.hasOwnProperty("line7") || song.line7.length===0){
        song.line7 = $scope.Song.line7;
      }
      if(!song.hasOwnProperty("line8") || song.line8.length===0){
        song.line8 = $scope.Song.line8;
      }
      if(!song.hasOwnProperty("line9") || song.line9.length===0){
        song.line9 = $scope.Song.line9;
      }
      if(!song.hasOwnProperty("line10") || song.line10.length===0){
        song.line10 = $scope.Song.line10;
      }
      if(!song.hasOwnProperty("line11") || song.line11.length===0){
        song.line11 = $scope.Song.line11;
      }
      if(!song.hasOwnProperty("line12") || song.line12.length===0){
        song.line12 = $scope.Song.line12;
      }
      if(!song.hasOwnProperty("line13") || song.line13.length===0){
        song.line13 = $scope.Song.line13;
      }
      if(!song.hasOwnProperty("line14") || song.line14.length===0){
        song.line14 = $scope.Song.line14;
      }
      if(!song.hasOwnProperty("line15") || song.line15.length===0){
        song.line15 = $scope.Song.line15;
      }
      if(!song.hasOwnProperty("line16") || song.line16.length===0){
        song.line16 = $scope.Song.line16;
      }
      if(!song.hasOwnProperty("line17") || song.line17.length===0){
        song.line17 = $scope.Song.line17;
      }
      if(!song.hasOwnProperty("line18") || song.line18.length===0){
        song.line18 = $scope.Song.line18;
      }
      if(!song.hasOwnProperty("line19") || song.line19.length===0){
        song.line19 = $scope.Song.line19;
      }
      if(!song.hasOwnProperty("line20") || song.line20.length===0){
        song.line20 = $scope.Song.line20;
      }
      if(!song.hasOwnProperty("line21") || song.line21.length===0){
        song.line21 = $scope.Song.line21;
      }
      if(!song.hasOwnProperty("line22") || song.line22.length===0){
        song.line22 = $scope.Song.line22;
      }
      if(!song.hasOwnProperty("line23") || song.line23.length===0){
        song.line23 = $scope.Song.line23;
      }
      if(!song.hasOwnProperty("line24") || song.line24.length===0){
        song.line24 = $scope.Song.line24;
      }
      if(!song.hasOwnProperty("line25") || song.line25.length===0){
        song.line25 = $scope.Song.line25;
      }
      if(!song.hasOwnProperty("line26") || song.line26.length===0){
        song.line26 = $scope.Song.line26;
      }
      if(!song.hasOwnProperty("line27") || song.line27.length===0){
        song.line27 = $scope.Song.line27;
      }
      if(!song.hasOwnProperty("line28") || song.line28.length===0){
        song.line28 = $scope.Song.line28;
      }
      if(!song.hasOwnProperty("line29") || song.line29.length===0){
        song.line29 = $scope.Song.line29;
      }
      if(!song.hasOwnProperty("line30") || song.line30.length===0){
        song.line30 = $scope.Song.line30;
      }

      songService.editSong($scope.Song.id, song)
      .success(function(data){

        $location.url('side-menu/song/content/'+ $scope.Song.id);
      });
    } else {

      if(!song.hasOwnProperty("id")){
        song.id = $scope.Song.id;
      }
      if(!song.hasOwnProperty("title")){
        song.title = $scope.Song.title;
      }
      if(!song.hasOwnProperty("ArtistId") || song.ArtistId.length===0){
        song.ArtistId = $scope.Song.AtistId;
      }
      if(!song.hasOwnProperty("AlbumId") || song.AlbumId.length===0){
        song.AlbumId = $scope.Song.AlbumId;
      }
      if(!song.hasOwnProperty("description") || song.description.length===0){
        song.description = $scope.Song.description;
      }
      if(!song.hasOwnProperty("line1") || song.line1.length===0){
        song.line1 = $scope.Song.line1;
      }
      if(!song.hasOwnProperty("line2") || song.line2.length===0){
        song.line2 = $scope.Song.line2;
      }
      if(!song.hasOwnProperty("line3") || song.line3.length===0){
        song.line3 = $scope.Song.line3;
      }
      if(!song.hasOwnProperty("line4") || song.line4.length===0){
        song.line4 = $scope.Song.line4;
      }
      if(!song.hasOwnProperty("line5") || song.line5.length===0){
        song.line5 = $scope.Song.line5;
      }
      if(!song.hasOwnProperty("line6") || song.line6.length===0){
        song.line6 = $scope.Song.line6;
      }
      if(!song.hasOwnProperty("line7") || song.line7.length===0){
        song.line7 = $scope.Song.line7;
      }
      if(!song.hasOwnProperty("line8") || song.line8.length===0){
        song.line8 = $scope.Song.line8;
      }
      if(!song.hasOwnProperty("line9") || song.line9.length===0){
        song.line9 = $scope.Song.line9;
      }
      if(!song.hasOwnProperty("line10") || song.line10.length===0){
        song.line10 = $scope.Song.line10;
      }
      if(!song.hasOwnProperty("line11") || song.line11.length===0){
        song.line11 = $scope.Song.line11;
      }
      if(!song.hasOwnProperty("line12") || song.line12.length===0){
        song.line12 = $scope.Song.line12;
      }
      if(!song.hasOwnProperty("line13") || song.line13.length===0){
        song.line13 = $scope.Song.line13;
      }
      if(!song.hasOwnProperty("line14") || song.line14.length===0){
        song.line14 = $scope.Song.line14;
      }
      if(!song.hasOwnProperty("line15") || song.line15.length===0){
        song.line15 = $scope.Song.line15;
      }
      if(!song.hasOwnProperty("line16") || song.line16.length===0){
        song.line16 = $scope.Song.line16;
      }
      if(!song.hasOwnProperty("line17") || song.line17.length===0){
        song.line17 = $scope.Song.line17;
      }
      if(!song.hasOwnProperty("line18") || song.line18.length===0){
        song.line18 = $scope.Song.line18;
      }
      if(!song.hasOwnProperty("line19") || song.line19.length===0){
        song.line19 = $scope.Song.line19;
      }
      if(!song.hasOwnProperty("line20") || song.line20.length===0){
        song.line20 = $scope.Song.line20;
      }
      if(!song.hasOwnProperty("line21") || song.line21.length===0){
        song.line21 = $scope.Song.line21;
      }
      if(!song.hasOwnProperty("line22") || song.line22.length===0){
        song.line22 = $scope.Song.line22;
      }
      if(!song.hasOwnProperty("line23") || song.line23.length===0){
        song.line23 = $scope.Song.line23;
      }
      if(!song.hasOwnProperty("line24") || song.line24.length===0){
        song.line24 = $scope.Song.line24;
      }
      if(!song.hasOwnProperty("line25") || song.line25.length===0){
        song.line25 = $scope.Song.line25;
      }
      if(!song.hasOwnProperty("line26") || song.line26.length===0){
        song.line26 = $scope.Song.line26;
      }
      if(!song.hasOwnProperty("line27") || song.line27.length===0){
        song.line27 = $scope.Song.line27;
      }
      if(!song.hasOwnProperty("line28") || song.line28.length===0){
        song.line28 = $scope.Song.line28;
      }
      if(!song.hasOwnProperty("line29") || song.line29.length===0){
        song.line29 = $scope.Song.line29;
      }
      if(!song.hasOwnProperty("line30") || song.line30.length===0){
        song.line30 = $scope.Song.line30;
      }

      songService.editSong($scope.Song.id, song)
      .success(function(data){

        $location.url('side-menu/song/content/'+ $scope.Song.id);
      });
    }

  };

  $scope.deleteSong = function(){
    songService.deleteSong($scope.Song)
    .success(function(data){
      $location.url('side-menu/home/songs');

    });
  };

  $scope.changeGenre = function(){
    console.log('CHANGING THE GENRE');
  };









});