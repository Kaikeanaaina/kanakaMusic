describe("kanakaMusicCtrl", function(){
  var $rootScope,
      $scope,
      controller;

  beforeEach(function(){
    module('app.Controllers');

    inject(function ($injector){
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      controller = $injector.get('$controller')("kanakaMusicCtrl", {$scope: $scope});
    });
  });

  describe("Initialization",function(){
    it("Should instantiate kainoa to be a boolean", function(){
      expect($scope.kainoa).toEqual(true);
    });
  });

})