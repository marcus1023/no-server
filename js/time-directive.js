angular.module('resources').directive('showTime', function(){
  return {
    restrict: 'E',
    template: "<div> It\'s {{time | date: 'shortTime'}} on a {{day}}</div>",
    link: function(scope, element, attrs){
      var currentTime = new Date();
      var n = currentTime.getDay()
      if(n === 2){
        n = "Tuesday"
      }
      else if(n === 1){
        n = "Monday"
      }
      else if(n === 3){
        n = "Wendsday"
      }
      else if(n === 4){
        n = "Thursday"
      }
      else if(n === 5){
        n = "Friday"
      }
      else if(n === 6){
        n = "Saturday"
      }
      else if(n === 0){
        n = "Sunday"
      }
      console.log(n)
      scope.day = n;
      scope.time = currentTime;
    }
  }
});
