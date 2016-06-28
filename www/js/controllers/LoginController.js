 
mainApp.controller('LoginController', function( $rootScope,$scope,$state,AuthenticationService,FacebookService,ErrorHelper) {
   

//*******************************************************************************************
//login with Facebook
//*******************************************************************************************       
     $scope.loginFacebook = function()
    {
    FacebookService.authenticate().then(function(result){  
            if(result.exists)
            {
               $rootScope.$broadcast('loadEvents'); 
               $state.go('tabs.profile');
            }
            else
            {

                 $state.go('createUser');
            }
        },function(error){
              ErrorHelper.showError(error);
        });
    }
}); 