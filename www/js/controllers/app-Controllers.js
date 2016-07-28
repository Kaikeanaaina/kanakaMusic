angular.module('app.Controllers', [])

.controller('kanakaMusicCtrl', function( $scope,$state,$location, $ionicPopup, $rootScope, songService, artistService, albumService, recordLabelService, loginService) {

  $scope.data = {};

  $scope.Song = [];
  $scope.NumberContemporarySong = [];
  $scope.AContemporarySong = [];
  $scope.BContemporarySong = [];
  $scope.CContemporarySong = [];
  $scope.DContemporarySong = [];
  $scope.EContemporarySong = [];
  $scope.FContemporarySong = [];
  $scope.GContemporarySong = [];
  $scope.HContemporarySong = [];
  $scope.IContemporarySong = [];
  $scope.JContemporarySong = [];
  $scope.KContemporarySong = [];
  $scope.LContemporarySong = [];
  $scope.MContemporarySong = [];
  $scope.NContemporarySong = [];
  $scope.OContemporarySong = [];
  $scope.PContemporarySong = [];
  $scope.QContemporarySong = [];
  $scope.RContemporarySong = [];
  $scope.SContemporarySong = [];
  $scope.TContemporarySong = [];
  $scope.UContemporarySong = [];
  $scope.VContemporarySong = [];
  $scope.WContemporarySong = [];
  $scope.XContemporarySong = [];
  $scope.YContemporarySong = [];
  $scope.ZContemporarySong = [];

  $scope.NumberHawaiianSong = [];
  $scope.AHawaiianSong = [];
  $scope.BHawaiianSong = [];
  $scope.CHawaiianSong = [];
  $scope.DHawaiianSong = [];
  $scope.EHawaiianSong = [];
  $scope.FHawaiianSong = [];
  $scope.GHawaiianSong = [];
  $scope.HHawaiianSong = [];
  $scope.IHawaiianSong = [];
  $scope.JHawaiianSong = [];
  $scope.KHawaiianSong = [];
  $scope.LHawaiianSong = [];
  $scope.MHawaiianSong = [];
  $scope.NHawaiianSong = [];
  $scope.OHawaiianSong = [];
  $scope.PHawaiianSong = [];
  $scope.QHawaiianSong = [];
  $scope.RHawaiianSong = [];
  $scope.SHawaiianSong = [];
  $scope.THawaiianSong = [];
  $scope.UHawaiianSong = [];
  $scope.VHawaiianSong = [];
  $scope.WHawaiianSong = [];
  $scope.XHawaiianSong = [];
  $scope.YHawaiianSong = [];
  $scope.ZHawaiianSong = [];

  $scope.Artist = [];
  $scope.Artists = [];
  $scope.NumberHawaiianArtist = [];
  $scope.AHawaiianArtist = [];
  $scope.BHawaiianArtist = [];
  $scope.CHawaiianArtist = [];
  $scope.DHawaiianArtist = [];
  $scope.EHawaiianArtist = [];
  $scope.FHawaiianArtist = [];
  $scope.GHawaiianArtist = [];
  $scope.HHawaiianArtist = [];
  $scope.IHawaiianArtist = [];
  $scope.JHawaiianArtist = [];
  $scope.KHawaiianArtist = [];
  $scope.LHawaiianArtist = [];
  $scope.MHawaiianArtist = [];
  $scope.NHawaiianArtist = [];
  $scope.OHawaiianArtist = [];
  $scope.PHawaiianArtist = [];
  $scope.QHawaiianArtist = [];
  $scope.RHawaiianArtist = [];
  $scope.SHawaiianArtist = [];
  $scope.THawaiianArtist = [];
  $scope.UHawaiianArtist = [];
  $scope.VHawaiianArtist = [];
  $scope.WHawaiianArtist = [];
  $scope.XHawaiianArtist = [];
  $scope.YHawaiianArtist = [];
  $scope.ZHawaiianArtist = [];

  $scope.Artist = [];
  $scope.Artists = [];
  $scope.NumberContemporaryArtist = [];
  $scope.AContemporaryArtist = [];
  $scope.BContemporaryArtist = [];
  $scope.CContemporaryArtist = [];
  $scope.DContemporaryArtist = [];
  $scope.EContemporaryArtist = [];
  $scope.FContemporaryArtist = [];
  $scope.GContemporaryArtist = [];
  $scope.HContemporaryArtist = [];
  $scope.IContemporaryArtist = [];
  $scope.JContemporaryArtist = [];
  $scope.KContemporaryArtist = [];
  $scope.LContemporaryArtist = [];
  $scope.MContemporaryArtist = [];
  $scope.NContemporaryArtist = [];
  $scope.OContemporaryArtist = [];
  $scope.PContemporaryArtist = [];
  $scope.QContemporaryArtist = [];
  $scope.RContemporaryArtist = [];
  $scope.SContemporaryArtist = [];
  $scope.TContemporaryArtist = [];
  $scope.UContemporaryArtist = [];
  $scope.VContemporaryArtist = [];
  $scope.WContemporaryArtist = [];
  $scope.XContemporaryArtist = [];
  $scope.YContemporaryArtist = [];
  $scope.ZContemporaryArtist = [];

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
    console.log('getting all songs');
    songService.getAllSongs()
    .success(function(data){

      console.log(data);

      for(var i = 0;i<data.length;i++){
        var splitTitle = data[i].title.toUpperCase().split("");
        if(splitTitle[0]==="A"){
          if(data[i].type==="Hawaiian"){
            $scope.AHawaiianSong.push(data[i]);
          }
          if(data[i].type==="Contemporary"){
            $scope.AContemporarySong.push(data[i]);
          }
        } else if(splitTitle[0]==="B"){
            if(data[i].type==="Hawaiian"){
              $scope.BHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.BContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="C"){
            if(data[i].type==="Hawaiian"){
              $scope.CHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.CContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="D"){
            if(data[i].type==="Hawaiian"){
              $scope.DHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.DContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="E"){
            if(data[i].type==="Hawaiian"){
              $scope.EHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.EContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="F"){
            if(data[i].type==="Hawaiian"){
              $scope.FHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.FContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="G"){
            if(data[i].type==="Hawaiian"){
              $scope.GHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.GContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="H"){
            if(data[i].type==="Hawaiian"){
              $scope.HHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.HContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="I"){
            if(data[i].type==="Hawaiian"){
              $scope.IHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.IContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="J"){
            if(data[i].type==="Hawaiian"){
              $scope.JHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.JContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="K"){
            if(data[i].type==="Hawaiian"){
              $scope.KHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.KContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="L"){
            if(data[i].type==="Hawaiian"){
              $scope.LHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.LContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="M"){
            if(data[i].type==="Hawaiian"){
              $scope.MHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.MContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="N"){
            if(data[i].type==="Hawaiian"){
              $scope.NHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.NContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="O"){
            if(data[i].type==="Hawaiian"){
              $scope.OHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.OContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="P"){
            if(data[i].type==="Hawaiian"){
              $scope.PHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.PContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="Q"){
            if(data[i].type==="Hawaiian"){
              $scope.QHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.QContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="R"){
            if(data[i].type==="Hawaiian"){
              $scope.RHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.RContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="S"){
            if(data[i].type==="Hawaiian"){
              $scope.SHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.SContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="T"){
            if(data[i].type==="Hawaiian"){
              $scope.THawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.TContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="U"){
            if(data[i].type==="Hawaiian"){
              $scope.UHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.UContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="V"){
            if(data[i].type==="Hawaiian"){
              $scope.VHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.VContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="W"){
            if(data[i].type==="Hawaiian"){
              $scope.WHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.WContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="X"){
            if(data[i].type==="Hawaiian"){
              $scope.XHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.XContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="Y"){
            if(data[i].type==="Hawaiian"){
              $scope.YHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.YContemporarySong.push(data[i]);
            }
        } else if(splitTitle[0]==="Z"){
            if(data[i].type==="Hawaiian"){
              $scope.ZHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.ZContemporarySong.push(data[i]);
            }
        } else {
            if(data[i].type==="Hawaiian"){
              $scope.NumberHawaiianSong.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.NumberContemporarySong.push(data[i]);
            }
        }
      }
    });
  };

  $scope.getSong = function(){
      var userLocationPath = $location.$$path;
      var userSplitLocationPath = userLocationPath.split("");
      userSplitLocationPath.splice(0,24);
      var userFinalLocationPath = userSplitLocationPath.join("");
      songService.getSong(encodeURI(userFinalLocationPath))
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

  $scope.getAllArtists = function(){
    artistService.getAllArtists()
    .success(function(data){

      for(var i = 0;i<data.length;i++){
        $scope.Artists.push(data[i]);
        var splitName = data[i].name.toUpperCase().split("");
        if(splitName[0]==="A"){
          if(data[i].type==="Hawaiian"){
            $scope.AHawaiianArtist.push(data[i]);
          }
          if(data[i].type==="Contemporary"){
            $scope.AContemporaryArtist.push(data[i]);
          }
        } else if(splitName[0]==="B"){
            if(data[i].type==="Hawaiian"){
              $scope.BHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.BContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="C"){
            if(data[i].type==="Hawaiian"){
              $scope.CHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.CContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="D"){
            if(data[i].type==="Hawaiian"){
              $scope.DHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.DContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="E"){
            if(data[i].type==="Hawaiian"){
              $scope.EHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.EContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="F"){
            if(data[i].type==="Hawaiian"){
              $scope.FHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.FContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="G"){
            if(data[i].type==="Hawaiian"){
              $scope.GHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.GContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="H"){
            if(data[i].type==="Hawaiian"){
              $scope.HHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.HContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="I"){
            if(data[i].type==="Hawaiian"){
              $scope.IHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.IContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="J"){
            if(data[i].type==="Hawaiian"){
              $scope.JHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.JContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="K"){
            if(data[i].type==="Hawaiian"){
              $scope.KHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.KContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="L"){
            if(data[i].type==="Hawaiian"){
              $scope.LHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.LContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="M"){
            if(data[i].type==="Hawaiian"){
              $scope.MHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.MContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="N"){
            if(data[i].type==="Hawaiian"){
              $scope.NHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.NContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="O"){
            if(data[i].type==="Hawaiian"){
              $scope.OHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.OContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="P"){
            if(data[i].type==="Hawaiian"){
              $scope.PHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.PContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="Q"){
            if(data[i].type==="Hawaiian"){
              $scope.QHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.QContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="R"){
            if(data[i].type==="Hawaiian"){
              $scope.RHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.RContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="S"){
            if(data[i].type==="Hawaiian"){
              $scope.SHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.SContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="T"){
            if(data[i].type==="Hawaiian"){
              $scope.THawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.TContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="U"){
            if(data[i].type==="Hawaiian"){
              $scope.UHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.UContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="V"){
            if(data[i].type==="Hawaiian"){
              $scope.VHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.VContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="W"){
            if(data[i].type==="Hawaiian"){
              $scope.WHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.WContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="X"){
            if(data[i].type==="Hawaiian"){
              $scope.XHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.XContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="Y"){
            if(data[i].type==="Hawaiian"){
              $scope.YHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.YContemporaryArtist.push(data[i]);
            }
        } else if(splitName[0]==="Z"){
            if(data[i].type==="Hawaiian"){
              $scope.ZHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.ZContemporaryArtist.push(data[i]);
            }
        } else {
            if(data[i].type==="Hawaiian"){
              $scope.NumberHawaiianArtist.push(data[i]);
            }
            if(data[i].type==="Contemporary"){
              $scope.NumberContemporaryArtist.push(data[i]);
            }
        }
      }
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
      albumService.getSpecificAlbums(data.id)
      .success(function(data){
        $scope.Albums = data;
      });
      songService.getSpecificSongsFromArtist(data.id)
      .success(function(data){
        $scope.Songs = data;
      });
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

  $scope.getAlbum = function(){
    var locationPath = $location.$$path;
    var splitLocationPath = locationPath.split("");
    splitLocationPath.splice(0,22);
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
      songService.getSpecificSongsFromAlbum(data.id)
      .success(function(data){
        $scope.Songs = data;
      });
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

});
