// describe('popupController', function() {
//   // beforeEach(module('myApp'));
//   var $controller;
//   beforeEach(inject(function(_$controller_){
//     $controller = _$controller_;
//   }));
//   it('hai',function(){
//   	expect(2+2).toEqual(4);
//   })
// describe('$scope.addData', function() {
//     it('values added or not', function() {
//     	 var modalInstance = {                    // Create a mock object using spies
//         close: jasmine.createSpy('modalInstance.close'),
//         dismiss: jasmine.createSpy('modalInstance.dismiss'),
//         result: {
//           then: jasmine.createSpy('modalInstance.result.then')
//         }
//       }; 
//       var $scope = {};
//       var controller = $controller('myController',{ $scope: $scope ,$modelInstance:modalInstance});
//       $scope.tid = '234';
//      $scope.tname='abcds';
//       $scope.addData();
//       expect($scope.datas).toEqual(jasmine.objectContaining([Object({tid:'234',tname: 'abcds'})]));  
//     });
// });
 // });  
 describe("scope tester",function(){
	beforeEach(module('myApp'));
	var $controller;

	beforeEach(inject(function(_$controller_){
		$controller=_$controller_;
	}));
 describe('$scope.grade', function() {
     it('sets the strength to "strong" if the password length is >8 chars', function() {
       var $scope = {};
       var controller = $controller('popupController', { $scope: $scope });
       var arr=[5,2,1,4,3];
       expect($scope.sort(arr)).toEqual([0,2,3,4,5]);
     });  });
});