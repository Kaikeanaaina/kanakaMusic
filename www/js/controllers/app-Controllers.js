angular.module('app.Controllers', [])

.controller('kanakaMusicCtrl', function($scope,$state,$location, songService, artistService, albumService, recordLabelService) {

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

  $scope.Artist = [];
  $scope.Artists = [];
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

  $scope.Album = [];
  $scope.Albums = [];
  $scope.NumberAlbum = [];
  $scope.AAlbum = [];
  $scope.BAlbum = [];
  $scope.CAlbum = [];
  $scope.DAlbum = [];
  $scope.EAlbum = [];
  $scope.FAlbum = [];
  $scope.GAlbum = [];
  $scope.HAlbum = [];
  $scope.IAlbum = [];
  $scope.JAlbum = [];
  $scope.KAlbum = [];
  $scope.LAlbum = [];
  $scope.MAlbum = [];
  $scope.NAlbum = [];
  $scope.OAlbum = [];
  $scope.PAlbum = [];
  $scope.QAlbum = [];
  $scope.RAlbum = [];
  $scope.SAlbum = [];
  $scope.TAlbum = [];
  $scope.UAlbum = [];
  $scope.VAlbum = [];
  $scope.WAlbum = [];
  $scope.XAlbum = [];
  $scope.YAlbum = [];
  $scope.ZAlbum = [];

  $scope.RecordLabel = [];
  $scope.RecordLabels = [];
  $scope.NumberRecordLabel = [];
  $scope.ARecordLabel = [];
  $scope.BRecordLabel = [];
  $scope.CRecordLabel = [];
  $scope.DRecordLabel = [];
  $scope.ERecordLabel = [];
  $scope.FRecordLabel = [];
  $scope.GRecordLabel = [];
  $scope.HRecordLabel = [];
  $scope.IRecordLabel = [];
  $scope.JRecordLabel = [];
  $scope.KRecordLabel = [];
  $scope.LRecordLabel = [];
  $scope.MRecordLabel = [];
  $scope.NRecordLabel = [];
  $scope.ORecordLabel = [];
  $scope.PRecordLabel = [];
  $scope.QRecordLabel = [];
  $scope.RRecordLabel = [];
  $scope.SRecordLabel = [];
  $scope.TRecordLabel = [];
  $scope.URecordLabel = [];
  $scope.VRecordLabel = [];
  $scope.WRecordLabel = [];
  $scope.XRecordLabel = [];
  $scope.YRecordLabel = [];
  $scope.ZRecordLabel = [];

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
          $scope.LSong.push(data[i]);
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
    if(song=== null || song === undefined){
      console.log('there needs to be a property');
      return $state.go('menu.addNewSong');
    }

    if(song.title.length===0){
      console.log('there needs to be value in name');
      return $state.go('menu.addNewSong');
    }

    if(!song.ArtistId){
      console.log('there needs to be ArtistId');
      return $state.go('menu.addNewSong');
    }

    if(!song.AlbumId){
      console.log('there needs to be AlbumId');
      return $state.go('menu.addNewSong');
    }


    console.log(song);


    songService.addSong(song)
    .success(function(data){
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
      return $state.go('menu.home.song');
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
      artistService.getArtist(data.ArtistId)
      .success(function(data){
        $scope.Artist = data;
      });
      albumService.getAlbum(data.AlbumId)
      .success(function(data){
        $scope.Album = data;
      });
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
      artistService.getArtist(data.ArtistId)
      .success(function(data){
        $scope.Artist = data;
      });
      albumService.getAlbum(data.AlbumId)
      .success(function(data){
        $scope.Album = data;
      });
    });
  };

  $scope.editSong = function(song){

    if(song===undefined || song === null){
      return $location.url('side-menu/song/content/'+ $scope.Song.id);
    }

    if(song.hasOwnProperty("title") && song.title.length!==0){

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
        return $location.url('side-menu/song/content/'+ $scope.Song.id);
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

        return $location.url('side-menu/song/content/'+ $scope.Song.id);
      });
    }
  };

  $scope.deleteSong = function(){
    songService.deleteSong($scope.Song)
    .success(function(data){
    return $state.go('menu.home.song');

    });
  };

  $scope.changeGenre = function(){
    console.log('CHANGING THE GENRE');
  };


  $scope.getAllArtists = function(){
    artistService.getAllArtists()
    .success(function(data){

      for(var i = 0;i<data.length;i++){
        $scope.Artists.push(data[i]);
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
          $scope.LArtist.push(data[i]);
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
      return $state.go('menu.addNewArtist');
    }

    if(artist.name.length===0 || artist=== null || artist === undefined){
      console.log('there needs to be value in name');
      return $state.go('menu.addNewArtist');
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
      return $state.go('menu.home.artist');
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
     /////////////////////
     console.log('1111111111', data);
      albumService.getSpecificAlbums(data.id)
      .success(function(data){
        console.log('555555555', data);
        $scope.Albums = data;
      });
      songService.getSpecificSongs(data.id)
      .success(function(data){
        $scope.Songs = data;
      });
    });
  };

  $scope.getArtistToEdit = function(){
    var locationPath = $location.$$path;
    var splitLocationPath = locationPath.split("");
    splitLocationPath.splice(0,23);
    var finalLocationPath = splitLocationPath.join("");
    artistService.getArtist(finalLocationPath)
    .success(function(data){
      $scope.Artist = data;
    });
  };


  $scope.editArtist = function(artist){

    if(artist===undefined || artist === null){
      return $location.url('side-menu/artist/content/'+ $scope.Artist.id);
    }

    if(artist.hasOwnProperty("name") && artist.name.length!==0){

      if(!artist.hasOwnProperty("id")){
        artist.id = $scope.Artist.id;
      }
      if(!artist.hasOwnProperty("facebook")){
        artist.facebook = $scope.Artist.facebook;
      }
      if(!artist.hasOwnProperty("instagram")){
        artist.instagram = $scope.Artist.instagram;
      }
      if(!artist.hasOwnProperty("twitter")){
        artist.twitter = $scope.Artist.twitter;
      }
      if(!artist.hasOwnProperty("bookingPhoneNumber")){
        artist.bookingPhoneNumber = $scope.Artist.bookingPhoneNumber;
      }
      if(!artist.hasOwnProperty("bookingEmail")){
        artist.bookingEmail = $scope.Artist.bookingEmail;
      }
      if(!artist.hasOwnProperty("description") || artist.description.length===0){
        artist.description = $scope.Artist.description;
      }

      artistService.editArtist($scope.Artist.id, artist)
      .success(function(data){
        $scope.getArtistToEdit();
        $location.url('side-menu/artist/content/'+ $scope.Artist.id);
      });
    } else {

      if(!artist.hasOwnProperty("id")){
        artist.id = $scope.Artist.id;
      }
      if(!artist.hasOwnProperty("name")){
        artist.name = $scope.Artist.name;
      }
      if(!artist.hasOwnProperty("facebook")){
        artist.facebook = $scope.Artist.facebook;
      }
      if(!artist.hasOwnProperty("instagram")){
        artist.instagram = $scope.Artist.instagram;
      }
      if(!artist.hasOwnProperty("twitter")){
        artist.twitter = $scope.Artist.twitter;
      }
      if(!artist.hasOwnProperty("bookingPhoneNumber")){
        artist.bookingPhoneNumber = $scope.Artist.bookingPhoneNumber;
      }
      if(!artist.hasOwnProperty("bookingEmail")){
        artist.bookingEmail = $scope.Artist.bookingEmail;
      }
      if(!artist.hasOwnProperty("description") || artist.description.length===0){
        artist.description = $scope.Artist.description;
      }


      artistService.editArtist($scope.Artist.id, artist)
      .success(function(data){
        $scope.getArtistToEdit();
        $location.url('side-menu/artist/content/'+ $scope.Artist.id);
      });
    }
  };

  $scope.deleteArtist = function(){
    console.log('delete this artist');
    artistService.deleteArtist($scope.Artist)
    .success(function(data){
      $scope.getAllArtists();
      return $state.go('menu.home.artist');


    });
  };

  $scope.getAllAlbums = function(){
    albumService.getAllAlbums()
    .success(function(data){

      for(var i = 0;i<data.length;i++){
        $scope.Albums.push(data[i]);
        var splitTitle = data[i].title.toUpperCase().split("");
        if(splitTitle[0]==="A"){
          $scope.AAlbum.push(data[i]);
        } else if(splitTitle[0]==="B"){
          $scope.BAlbum.push(data[i]);
        } else if(splitTitle[0]==="C"){
          $scope.CAlbum.push(data[i]);
        } else if(splitTitle[0]==="D"){
          $scope.DAlbum.push(data[i]);
        } else if(splitTitle[0]==="E"){
          $scope.EAlbum.push(data[i]);
        } else if(splitTitle[0]==="F"){
          $scope.FAlbum.push(data[i]);
        } else if(splitTitle[0]==="G"){
          $scope.GAlbum.push(data[i]);
        } else if(splitTitle[0]==="H"){
          $scope.HAlbum.push(data[i]);
        } else if(splitTitle[0]==="I"){
          $scope.IAlbum.push(data[i]);
        } else if(splitTitle[0]==="J"){
          $scope.JAlbum.push(data[i]);
        } else if(splitTitle[0]==="K"){
          $scope.KAlbum.push(data[i]);
        } else if(splitTitle[0]==="L"){
          $scope.LAlbum.push(data[i]);
        } else if(splitTitle[0]==="M"){
          $scope.MAlbum.push(data[i]);
        } else if(splitTitle[0]==="N"){
          $scope.NAlbum.push(data[i]);
        } else if(splitTitle[0]==="O"){
          $scope.OAlbum.push(data[i]);
        } else if(splitTitle[0]==="P"){
          $scope.PAlbum.push(data[i]);
        } else if(splitTitle[0]==="Q"){
          $scope.QAlbum.push(data[i]);
        } else if(splitTitle[0]==="R"){
          $scope.RAlbum.push(data[i]);
        } else if(splitTitle[0]==="S"){
          $scope.SAlbum.push(data[i]);
        } else if(splitTitle[0]==="T"){
          $scope.TAlbum.push(data[i]);
        } else if(splitTitle[0]==="U"){
          $scope.UAlbum.push(data[i]);
        } else if(splitTitle[0]==="V"){
          $scope.VAlbum.push(data[i]);
        } else if(splitTitle[0]==="W"){
          $scope.WAlbum.push(data[i]);
        } else if(splitTitle[0]==="X"){
          $scope.XAlbum.push(data[i]);
        } else if(splitTitle[0]==="Y"){
          $scope.YAlbum.push(data[i]);
        } else if(splitTitle[0]==="Z"){
          $scope.ZAlbum.push(data[i]);
        } else {
          $scope.NumberAlbum.push(data[i]);
        }
      }
    });
  };

  $scope.addAlbum = function(album){

    if(album=== null || album === undefined || album.title.length===0 ){
      console.log('there needs to be value in name');
      return $state.go('menu.addNewAlbum');
    }

    if(!album.title){
      console.log('there need to be a album name property');
      return $state.go('menu.addNewAlbum');
    }

    if(!album.ArtistId){
      console.log('there need to be a album artist property');
      return $location.url('/side-menu/addNewAlbum');
    }
    if(!album.RecordLabelId){
      console.log('there need to be a album RecordLabel property');
      return $location.url('/side-menu/addNewAlbum');
    }


    albumService.addAlbum(album)
    .success(function(data){
      $scope.getAllAlbums();

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
      return $state.go('menu.addNewSong');
    });
  };

  $scope.getAlbum = function(){
    var locationPath = $location.$$path;
    var splitLocationPath = locationPath.split("");
    splitLocationPath.splice(0,17);
    var finalLocationPath = splitLocationPath.join("");
    albumService.getAlbum(encodeURI(finalLocationPath))
    .success(function(data){
     $scope.Album = data;
      recordLabelService.getRecordLabel(data.RecordLabelId)
      .success(function(data){
        $scope.RecordLabel = data;
      });
      artistService.getArtist(data.ArtistId)
      .success(function(data){
        $scope.Artist = data;
      });
    });
  };

  $scope.getAlbumToEdit = function(){
    var locationPath = $location.$$path;
    var splitLocationPath = locationPath.split("");
    splitLocationPath.splice(0,22);
    var finalLocationPath = splitLocationPath.join("");
    albumService.getAlbum(finalLocationPath)
    .success(function(data){
      $scope.Album = data;
    });
  };

  $scope.editAlbum = function(album){
    if(album===undefined || album === null){
      return $location.url('side-menu/album/'+ $scope.Album.id);
    }

    if(album.hasOwnProperty("title") && album.title.length!==0){

      if(!album.hasOwnProperty("id")){
        album.id = $scope.Album.id;
      }
      if(!album.hasOwnProperty("RecordLabelId") || album.RecordLabelId.length===0){
        album.RecordLabelId = $scope.Album.RecordLabelId;
      }
      if(!album.hasOwnProperty("description") || album.description.length===0){
        album.description = $scope.Album.description;
      }

      albumService.editAlbum($scope.Album.id, album)
      .success(function(data){
        $scope.getAlbumToEdit();
        return $location.url('side-menu/album/'+ $scope.Album.id);
      });
    } else {

      if(!album.hasOwnProperty("id")){
        album.id = $scope.Album.id;
      }
      if(!album.hasOwnProperty("title")){
        album.title = $scope.Album.title;
      }
      if(!album.hasOwnProperty("RecordLabelId") || album.RecordLabelId.length===0){
        album.RecordLabelId = $scope.Album.RecordLabelId;
      }
      if(!album.hasOwnProperty("description") || album.description.length===0){
        album.description = $scope.Album.description;
      }


      albumService.editAlbum($scope.Album.id, album)
      .success(function(data){
        $scope.getAlbumToEdit();
        return $location.url('side-menu/album/'+ $scope.Album.id);
      });
    }
  };

  $scope.deleteAlbum = function(){
    albumService.deleteAlbum($scope.Album)
    .success(function(data){
      $scope.getAllAlbums();
      return $state.go('menu.albums');

    });
  };

 $scope.getAllRecordLabels = function(){
    recordLabelService.getAllRecordLabels()
    .success(function(data){

      for(var i = 0;i<data.length;i++){
        $scope.RecordLabels.push(data[i]);
        var splitName = data[i].name.toUpperCase().split("");
        if(splitName[0]==="A"){
          $scope.ARecordLabel.push(data[i]);
        } else if(splitName[0]==="B"){
          $scope.BRecordLabel.push(data[i]);
        } else if(splitName[0]==="C"){
          $scope.CRecordLabel.push(data[i]);
        } else if(splitName[0]==="D"){
          $scope.DRecordLabel.push(data[i]);
        } else if(splitName[0]==="E"){
          $scope.ERecordLabel.push(data[i]);
        } else if(splitName[0]==="F"){
          $scope.FRecordLabel.push(data[i]);
        } else if(splitName[0]==="G"){
          $scope.GRecordLabel.push(data[i]);
        } else if(splitName[0]==="H"){
          $scope.HRecordLabel.push(data[i]);
        } else if(splitName[0]==="I"){
          $scope.IRecordLabel.push(data[i]);
        } else if(splitName[0]==="J"){
          $scope.JRecordLabel.push(data[i]);
        } else if(splitName[0]==="K"){
          $scope.KRecordLabel.push(data[i]);
        } else if(splitName[0]==="L"){
          $scope.LRecordLabel.push(data[i]);
        } else if(splitName[0]==="M"){
          $scope.MRecordLabel.push(data[i]);
        } else if(splitName[0]==="N"){
          $scope.NRecordLabel.push(data[i]);
        } else if(splitName[0]==="O"){
          $scope.ORecordLabel.push(data[i]);
        } else if(splitName[0]==="P"){
          $scope.PRecordLabel.push(data[i]);
        } else if(splitName[0]==="Q"){
          $scope.QRecordLabel.push(data[i]);
        } else if(splitName[0]==="R"){
          $scope.RRecordLabel.push(data[i]);
        } else if(splitName[0]==="S"){
          $scope.SRecordLabel.push(data[i]);
        } else if(splitName[0]==="T"){
          $scope.TRecordLabel.push(data[i]);
        } else if(splitName[0]==="U"){
          $scope.URecordLabel.push(data[i]);
        } else if(splitName[0]==="V"){
          $scope.VRecordLabel.push(data[i]);
        } else if(splitName[0]==="W"){
          $scope.WRecordLabel.push(data[i]);
        } else if(splitName[0]==="X"){
          $scope.XRecordLabel.push(data[i]);
        } else if(splitName[0]==="Y"){
          $scope.YRecordLabel.push(data[i]);
        } else if(splitName[0]==="Z"){
          $scope.ZRecordLabel.push(data[i]);
        } else {
          $scope.NumberRecordLabel.push(data[i]);
        }
      }
    });
  };

  $scope.addRecordLabel = function(recordLabel){

    if(!recordLabel.name){
      console.log('there need to be a recordLabel name property');
      return $state.go('menu.addNewRecordLabel');
    }

    // if(!recordLabel.ArtistId){
    //   console.log('there need to be a recordLabel artist property');
    //   return $location.url('/side-menu/addNewrecordLabel');
    // }

    if(recordLabel.name.length===0 || recordLabel=== null || recordLabel === undefined){
      console.log('there needs to be value in name');
      return $state.go('menu.addNewRecordLabel');
    }

    recordLabelService.addRecordLabel(recordLabel)
    .success(function(data){
      $scope.getAllRecordLabels();

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
      return $state.go('menu.recordLabels');
    });
  };

  $scope.getRecordLabelToEdit = function(){
    var locationPath = $location.$$path;
    var splitLocationPath = locationPath.split("");
    splitLocationPath.splice(0,28);
    var finalLocationPath = splitLocationPath.join("");
    recordLabelService.getRecordLabel(finalLocationPath)
    .success(function(data){
      $scope.RecordLabel = data;
    });
  };

  $scope.editRecordLabel = function(recordLabel){
    if(recordLabel===undefined || recordLabel === null || recordLabel.name.length===0){
      return $state.go('menu.recordLabels');
    }
    if(recordLabel.hasOwnProperty("name")){
      if(!recordLabel.hasOwnProperty("id")){
        recordLabel.id = $scope.RecordLabel.id;
      }

      recordLabelService.editRecordLabel($scope.RecordLabel.id, recordLabel)
      .success(function(data){
        return $state.go("menu.recordLabels");

      });
    } else {

      if(!recordLabel.hasOwnProperty("id")){
        recordLabel.id = $scope.RecordLabel.id;
      }
      if(!recordLabel.hasOwnProperty("name")){
        recordLabel.name = $scope.RecordLabel.name;
      }

      recordLabelService.editRecordLabel($scope.RecordLabel.id, recordLabel)
      .success(function(data){
        return $state.go("menu.recordLabels");
      });
    }
  };

  $scope.deleteRecordLabel = function(){
    recordLabelService.deleteRecordLabel($scope.RecordLabel)
    .success(function(data){
      return $state.go("menu.recordLabels");

    });
  };

});
