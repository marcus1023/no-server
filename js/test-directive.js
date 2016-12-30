angular.module('resources').directive('statusEle', function(){
  return {
    restrict: 'AE',
    template: "<div class='ele-shield'><div title='this feature is not avalible' class='status-ele'> Add New Resource</div><div>"
  }
});
