
angular.module('app.artistController', [])


.controller('artistCtrl', function($scope, $location, artistService) {
  $scope.Artist = [];

  $scope.NumberArtist = [];
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

  $scope.getArtist = function(artist){
    var locationPath = $location.$$path;
    var splitLocationPath = locationPath.split("");
    splitLocationPath.splice(0,26);
    var finalLocationPath = splitLocationPath.join("");
    artistService.getArtist(encodeURI(finalLocationPath))
    .success(function(data){
     $scope.Artist = data;
    });
  };

  $scope.getArtistToEdit = function(){
    console.log('edit page 111111111');
    var locationPath = $location.$$path;
    var splitLocationPath = locationPath.split("");
    splitLocationPath.splice(0,23);
    var finalLocationPath = splitLocationPath.join("");
    artistService.getArtist(finalLocationPath)
    .success(function(data){
      console.log('edit page 55555555');
      $scope.Artist = data;
    });
  };

  $scope.getArtistForInformation = function(){
    console.log('band info page 111111111');
    var locationPath = $location.$$path;
    var splitLocationPath = locationPath.split("");
    splitLocationPath.splice(0,23);
    var finalLocationPath = splitLocationPath.join("");
    artistService.getArtist(finalLocationPath)
    .success(function(data){
      console.log('band info page 55555555');
      $scope.Artist = data;
    });
  };


$scope.editArtist = function(){
  console.log('edit 111111111');

  //   if(song===undefined || song === null){
  //     return $location.url('side-menu/song/content/'+ $scope.Song.title);
  //   }

  //   if(song.hasOwnProperty("title")){

  //     if(!song.hasOwnProperty("id")){
  //       song.id = $scope.Song.id;
  //     }
  //     if(!song.hasOwnProperty("ArtistId") || song.ArtistId.length===0){
  //       song.ArtistId = $scope.Song.AtistId;
  //     }
  //     if(!song.hasOwnProperty("AlbumId") || song.AlbumId.length===0){
  //       song.AlbumId = $scope.Song.AlbumId;
  //     }
  //     if(!song.hasOwnProperty("description") || song.description.length===0){
  //       song.description = $scope.Song.description;
  //     }
  //     if(!song.hasOwnProperty("line1") || song.line1.length===0){
  //       song.line1 = $scope.Song.line1;
  //     }
  //     if(!song.hasOwnProperty("line2") || song.line2.length===0){
  //       song.line2 = $scope.Song.line2;
  //     }
  //     if(!song.hasOwnProperty("line3") || song.line3.length===0){
  //       song.line3 = $scope.Song.line3;
  //     }
  //     if(!song.hasOwnProperty("line4") || song.line4.length===0){
  //       song.line4 = $scope.Song.line4;
  //     }
  //     if(!song.hasOwnProperty("line5") || song.line5.length===0){
  //       song.line5 = $scope.Song.line5;
  //     }
  //     if(!song.hasOwnProperty("line6") || song.line6.length===0){
  //       song.line6 = $scope.Song.line6;
  //     }
  //     if(!song.hasOwnProperty("line7") || song.line7.length===0){
  //       song.line7 = $scope.Song.line7;
  //     }
  //     if(!song.hasOwnProperty("line8") || song.line8.length===0){
  //       song.line8 = $scope.Song.line8;
  //     }
  //     if(!song.hasOwnProperty("line9") || song.line9.length===0){
  //       song.line9 = $scope.Song.line9;
  //     }
  //     if(!song.hasOwnProperty("line10") || song.line10.length===0){
  //       song.line10 = $scope.Song.line10;
  //     }
  //     if(!song.hasOwnProperty("line11") || song.line11.length===0){
  //       song.line11 = $scope.Song.line11;
  //     }
  //     if(!song.hasOwnProperty("line12") || song.line12.length===0){
  //       song.line12 = $scope.Song.line12;
  //     }
  //     if(!song.hasOwnProperty("line13") || song.line13.length===0){
  //       song.line13 = $scope.Song.line13;
  //     }
  //     if(!song.hasOwnProperty("line14") || song.line14.length===0){
  //       song.line14 = $scope.Song.line14;
  //     }
  //     if(!song.hasOwnProperty("line15") || song.line15.length===0){
  //       song.line15 = $scope.Song.line15;
  //     }
  //     if(!song.hasOwnProperty("line16") || song.line16.length===0){
  //       song.line16 = $scope.Song.line16;
  //     }
  //     if(!song.hasOwnProperty("line17") || song.line17.length===0){
  //       song.line17 = $scope.Song.line17;
  //     }
  //     if(!song.hasOwnProperty("line18") || song.line18.length===0){
  //       song.line18 = $scope.Song.line18;
  //     }
  //     if(!song.hasOwnProperty("line19") || song.line19.length===0){
  //       song.line19 = $scope.Song.line19;
  //     }
  //     if(!song.hasOwnProperty("line20") || song.line20.length===0){
  //       song.line20 = $scope.Song.line20;
  //     }
  //     if(!song.hasOwnProperty("line21") || song.line21.length===0){
  //       song.line21 = $scope.Song.line21;
  //     }
  //     if(!song.hasOwnProperty("line22") || song.line22.length===0){
  //       song.line22 = $scope.Song.line22;
  //     }
  //     if(!song.hasOwnProperty("line23") || song.line23.length===0){
  //       song.line23 = $scope.Song.line23;
  //     }
  //     if(!song.hasOwnProperty("line24") || song.line24.length===0){
  //       song.line24 = $scope.Song.line24;
  //     }
  //     if(!song.hasOwnProperty("line25") || song.line25.length===0){
  //       song.line25 = $scope.Song.line25;
  //     }
  //     if(!song.hasOwnProperty("line26") || song.line26.length===0){
  //       song.line26 = $scope.Song.line26;
  //     }
  //     if(!song.hasOwnProperty("line27") || song.line27.length===0){
  //       song.line27 = $scope.Song.line27;
  //     }
  //     if(!song.hasOwnProperty("line28") || song.line28.length===0){
  //       song.line28 = $scope.Song.line28;
  //     }
  //     if(!song.hasOwnProperty("line29") || song.line29.length===0){
  //       song.line29 = $scope.Song.line29;
  //     }
  //     if(!song.hasOwnProperty("line30") || song.line30.length===0){
  //       song.line30 = $scope.Song.line30;
  //     }

  //     songService.editSong($scope.Song.id, song)
  //     .success(function(data){

  //       $location.url('side-menu/song/content/'+ $scope.Song.id);
  //     });
  //   } else {

  //     if(!song.hasOwnProperty("id")){
  //       song.id = $scope.Song.id;
  //     }
  //     if(!song.hasOwnProperty("title")){
  //       song.title = $scope.Song.title;
  //     }
  //     if(!song.hasOwnProperty("ArtistId") || song.ArtistId.length===0){
  //       song.ArtistId = $scope.Song.AtistId;
  //     }
  //     if(!song.hasOwnProperty("AlbumId") || song.AlbumId.length===0){
  //       song.AlbumId = $scope.Song.AlbumId;
  //     }
  //     if(!song.hasOwnProperty("description") || song.description.length===0){
  //       song.description = $scope.Song.description;
  //     }
  //     if(!song.hasOwnProperty("line1") || song.line1.length===0){
  //       song.line1 = $scope.Song.line1;
  //     }
  //     if(!song.hasOwnProperty("line2") || song.line2.length===0){
  //       song.line2 = $scope.Song.line2;
  //     }
  //     if(!song.hasOwnProperty("line3") || song.line3.length===0){
  //       song.line3 = $scope.Song.line3;
  //     }
  //     if(!song.hasOwnProperty("line4") || song.line4.length===0){
  //       song.line4 = $scope.Song.line4;
  //     }
  //     if(!song.hasOwnProperty("line5") || song.line5.length===0){
  //       song.line5 = $scope.Song.line5;
  //     }
  //     if(!song.hasOwnProperty("line6") || song.line6.length===0){
  //       song.line6 = $scope.Song.line6;
  //     }
  //     if(!song.hasOwnProperty("line7") || song.line7.length===0){
  //       song.line7 = $scope.Song.line7;
  //     }
  //     if(!song.hasOwnProperty("line8") || song.line8.length===0){
  //       song.line8 = $scope.Song.line8;
  //     }
  //     if(!song.hasOwnProperty("line9") || song.line9.length===0){
  //       song.line9 = $scope.Song.line9;
  //     }
  //     if(!song.hasOwnProperty("line10") || song.line10.length===0){
  //       song.line10 = $scope.Song.line10;
  //     }
  //     if(!song.hasOwnProperty("line11") || song.line11.length===0){
  //       song.line11 = $scope.Song.line11;
  //     }
  //     if(!song.hasOwnProperty("line12") || song.line12.length===0){
  //       song.line12 = $scope.Song.line12;
  //     }
  //     if(!song.hasOwnProperty("line13") || song.line13.length===0){
  //       song.line13 = $scope.Song.line13;
  //     }
  //     if(!song.hasOwnProperty("line14") || song.line14.length===0){
  //       song.line14 = $scope.Song.line14;
  //     }
  //     if(!song.hasOwnProperty("line15") || song.line15.length===0){
  //       song.line15 = $scope.Song.line15;
  //     }
  //     if(!song.hasOwnProperty("line16") || song.line16.length===0){
  //       song.line16 = $scope.Song.line16;
  //     }
  //     if(!song.hasOwnProperty("line17") || song.line17.length===0){
  //       song.line17 = $scope.Song.line17;
  //     }
  //     if(!song.hasOwnProperty("line18") || song.line18.length===0){
  //       song.line18 = $scope.Song.line18;
  //     }
  //     if(!song.hasOwnProperty("line19") || song.line19.length===0){
  //       song.line19 = $scope.Song.line19;
  //     }
  //     if(!song.hasOwnProperty("line20") || song.line20.length===0){
  //       song.line20 = $scope.Song.line20;
  //     }
  //     if(!song.hasOwnProperty("line21") || song.line21.length===0){
  //       song.line21 = $scope.Song.line21;
  //     }
  //     if(!song.hasOwnProperty("line22") || song.line22.length===0){
  //       song.line22 = $scope.Song.line22;
  //     }
  //     if(!song.hasOwnProperty("line23") || song.line23.length===0){
  //       song.line23 = $scope.Song.line23;
  //     }
  //     if(!song.hasOwnProperty("line24") || song.line24.length===0){
  //       song.line24 = $scope.Song.line24;
  //     }
  //     if(!song.hasOwnProperty("line25") || song.line25.length===0){
  //       song.line25 = $scope.Song.line25;
  //     }
  //     if(!song.hasOwnProperty("line26") || song.line26.length===0){
  //       song.line26 = $scope.Song.line26;
  //     }
  //     if(!song.hasOwnProperty("line27") || song.line27.length===0){
  //       song.line27 = $scope.Song.line27;
  //     }
  //     if(!song.hasOwnProperty("line28") || song.line28.length===0){
  //       song.line28 = $scope.Song.line28;
  //     }
  //     if(!song.hasOwnProperty("line29") || song.line29.length===0){
  //       song.line29 = $scope.Song.line29;
  //     }
  //     if(!song.hasOwnProperty("line30") || song.line30.length===0){
  //       song.line30 = $scope.Song.line30;
  //     }

  //     songService.editSong($scope.Song.id, song)
  //     .success(function(data){

  //       $location.url('side-menu/song/content/'+ $scope.Song.id);
  //     });
  //   }

  };

  $scope.deleteArtist = function(){
    console.log('delete this artist');
    artistService.deleteArtist($scope.Artist)
    .success(function(data){
      $location.url('side-menu/home/artists');

    });
  };




});