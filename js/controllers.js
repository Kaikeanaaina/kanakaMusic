angular.module('starter.controllers',[])

.controller('DashCtrl', function($scope) {})

.controller('ArtistsCtrl', function($scope, Artists){
  $scope.artists = Artists.all();
})

.controller('ArtistDetailCtrl', function($scope, $stateParams, Artists){
  $scope.artist = Artists.get($stateParams.artistId);
})

.controller('SongsCtrl', function($scope, Songs) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.songs = Songs.all();
  $scope.remove = function(song) {
    Songs.remove(song);
  };
})

.controller('SongDetailCtrl', function($scope, $stateParams, Songs) {
  $scope.song = Songs.get($stateParams.songId);
})

.controller('LabelsCtrl', function($scope, Labels) {
  $scope.labels = Labels.all();
})

.controller('PublishersCtrl', function($scope, Publishers) {
  $scope.publishers = Publishers.all();
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
