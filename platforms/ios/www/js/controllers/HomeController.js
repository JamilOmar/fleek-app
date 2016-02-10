 
mainApp.controller('HomeController', function($scope,$state) {
   
  $scope.goTo = function(path)
  {
    $state.go(path);
    
  }
}); 