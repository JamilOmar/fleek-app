 
mainApp.controller('LoginController', function($scope,$state) {
   
  $scope.login = function()
  {
    $state.go('review');
    
  }
}); 