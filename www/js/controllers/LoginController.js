 
mainApp.controller('LoginController', function($scope,$state,AuthenticationService,FacebookService,ErrorHelper) {
   
//*******************************************************************************************
//login
//*******************************************************************************************     
    $scope.login = function(user)
    {
      AuthenticationService.authenticate(user.username,user.password ).then(function (result) {   
          if(result)
            {
                $state.go('tabs.profile');
            }
            else
            {

                   ErrorHelper.showError('TODO:ERROR');
            }
    }, function (error) {
             ErrorHelper.showError(error);
    });
   
    
    
  }
//*******************************************************************************************
//login with Facebook
//*******************************************************************************************       
     $scope.loginFacebook = function()
    {
        FacebookService.authenticate().then(function(result){  
            if(result.exists)
            {
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