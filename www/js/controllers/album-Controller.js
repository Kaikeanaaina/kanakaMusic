angular.module('app.albumController', [])


.controller('albumCtrl', function($scope, $state, $location, albumService) {

  $scope.Album = [];
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



  $scope.getAllAlbums = function(){
    albumService.getAllAlbums()
    .success(function(data){

      for(var i = 0;i<data.length;i++){
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
          $scope.MAlbum.push(data[i]);
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

    if(!album.title){
      console.log('there need to be a album name property');
      return $state.go('menu.addNewAlbum');
    }

    // if(!album.ArtistId){
    //   console.log('there need to be a album artist property');
    //   return $location.url('/side-menu/addNewAlbum');
    // }

    if(album.title.length===0 || album=== null || album === undefined){
      console.log('there needs to be value in name');
      return $state.go('menu.addNewAlbum');
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
      return $state.go('menu.albums');
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



});