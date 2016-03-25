angular.module('myApp', ['ngRoute', 'ngStorage']);

var myApp = angular.module('myApp');

var checkedLoggedIn=function($q, $timeout, $http, $location, $rootScope) {
  //initiate a new promise
  var deferred =$q.defer();

  //make and AJAX call to check if the user is logged in
  $http.get('/api/authenticate')
    .success(function(user) {
      // if Authenticated
      if(user !== '0') {
        deferred.resolve();

      //if not Authenticated
      } else if(user === '0') {
        $rootScope.message= 'You need to log in.';
        deferred.reject();
        $location.url('/login');
      }
    });
    return deferred.promise;
};

myApp
.config(['$routeProvider', function($routeProvider){

  $routeProvider
    .when('/', {
      templateUrl : 'views/landingPage.html',
      controller : 'SongController'
    })
    .when('/song/newSong', {
      templateUrl : 'views/newSongPage.html',
      controller : 'SongController'
    })
    .when('/song/:id', {
      templateUrl : 'views/mainSongPage.html',
      controller : 'SongController'
    })
    .when('/song/edit/:id', {
      templateUrl : 'views/editSongPage.html',
      controller : 'SongController'
    });
}])

.run(['$rootScope', '$localStorage', function($rootScope, $localStorage){

}]);