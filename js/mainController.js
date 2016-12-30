angular.module('resources').controller('mainController', function(mainService, $scope){

$scope.test = "this app is working"





$scope.getServiceNumber = function(){
  $scope.questions = mainService.getQuestion();

}




// makes a random selection
$scope.randomQuestionFunction = function(){
  f = (Math.random()*10);
g = Math.round(f)

console.log('first test')

if(g <= $scope.questions.length - 1){
  $scope.randomQuestion = $scope.questions[g]
}else{
  console.log('this question does not exist')
}
  // $scope.randomQuestion =  $scope.questions[1].question
}



// pulls in css resources
$scope.getAllResources = function(){
  $scope.cssResources = mainService.getAllResources[0];
  $scope.designResources = mainService.getAllResources[1];
  $scope.learnResources = mainService.getAllResources[2];
}

$scope.getWeather = function(){
  mainService.getWeather().then(function(res){
    $scope.philiTemp = res
  })
}

$scope.getAllResources();
$scope.getServiceNumber();
$scope.getWeather();
// name of the person using this tool

$scope.name = "Marcus Ogden"


function convertDate(n){
  if(n === 2){
    n = "Tuesday"
  }
  else if(n === 1){
    n = "Monday"
  }
  else if(n === 3){
    n = "Wendsday"
  }
  return r
}




})
