angular.module('excelCourses').controller('mainController', function(mainService, $scope, $interval, $state){



/*$scope.$on('$stateChangeSuccess', function(){
  if($state.current.name === "home"){
  console.log('got in if',$state.current.name );
    $("#nav-home").css( "color", "red" );
  }
});*/

$scope.earlyBirdTimerM = 60
$scope.earlyBirdTimerS = 1
$scope.earlyBirdTimerZ;

  $interval(function(){
    if($scope.earlyBirdTimerS > 0){
      $scope.earlyBirdTimerS -= 1
      if($scope.earlyBirdTimerS < 10 && $scope.earlyBirdTimerS > 0){
        $scope.earlyBirdTimerZ = 0;
      }
      if($scope.earlyBirdTimerS > 10){
        $scope.earlyBirdTimerZ = undefined;
      }
    }
    if($scope.earlyBirdTimerS === 0){
      $scope.earlyBirdTimerM -= 1
      $scope.earlyBirdTimerS = 60
      if($scope.earlyBirdTimerM <= 0){
        $scope.earlyBirdTimerM = "fin"
        $scope.earlyBirdTimerS = "shed"
      }
    }
  }, 1000);


  })
