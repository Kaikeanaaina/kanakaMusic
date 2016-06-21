angular.module('app.settingController', [])

.controller('settingCtrl', function($scope, $state, loginService) {
console.log('this is the settings controller');

  $scope.logOut = function(){
    loginService.logOutUser().success(function(data){
      return $state.go('menu.login');
    });
  };

});