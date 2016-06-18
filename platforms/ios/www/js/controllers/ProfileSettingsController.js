 
mainApp.controller('ProfileSettingsController', function($scope,$state,ProviderService,UserService,UserUtils,FacebookService) {
//*******************************************************************************************
//method to go to other pages
//*******************************************************************************************      
  $scope.goTo = function(path,obj)
    {
        $state.go(path,obj);
    }
//*******************************************************************************************
//logout
//*******************************************************************************************     
 $scope.logoutFacebook = function()
    {
        FacebookService.logout(UserUtils.getToken()).then(function(result){
            
          $scope.goTo('login',null);
        },function(error){
          $scope.goTo('login',null);
        });
    }
  
}); 