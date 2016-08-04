angular.module('app.loginServices', [])

.service('loginService', function($q, $http) {
  var isCordovaApp = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
  var domain;
  if(!isCordovaApp){
    domain = 'http://localhost:4001';
  }
  if(isCordovaApp){
    domain = '.';
  }

});