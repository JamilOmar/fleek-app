 
mainApp.controller('ChooseProfileController', function($scope,$state) {
   
  $scope.chooseProfile = function(profile)
  {
    $state.go(profile);
    
  }
}); 