(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.itemsList = "";
    $scope.message = "";
    $scope.messageId = "normal";
    $scope.myFunction = function () {
      if($scope.itemsList===""){
        $scope.message =  "Please enter data first!";
        $scope.messageId = "danger";
      }
      else{
        var arrLength = $scope.itemsList.split(',').length;
        if(arrLength <= 3){
          $scope.message = "Enjoy!";
          $scope.messageId = "success";
        }
        else{
          $scope.message = "Too much!";
          $scope.messageId = "too-much";
        }
      }
  };
};

})();
