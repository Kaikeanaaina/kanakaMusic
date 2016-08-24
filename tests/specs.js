// describe('Controllers', function(){
//   beforeEach(module('app.Controllers'));

//   var $controller;

//   beforeEach(inject(function(_$controller_){
//     // The injector unwraps the underscores (_) from around the parameter names when matching
//     $controller = _$controller_;
//   }));

//   describe('$scope.kainoa', function(){
//     var $scope, controller;

//     beforeEach(function(){
//       $scope = {};
//       controller = $controller('Controllers', { $scope: $scope });
//     });

//     it('is equal to true', function(){
//       expect($scope.kainoa).toEqual(true);
//     });


//   });
// });

describe('true', function(){
  it('Should be true', function(){
    expect(true).toBeTruthy();
  });
});