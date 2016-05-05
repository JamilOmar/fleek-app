 
mainApp.controller('LoginController', function($scope,$state,AuthenticationService,FacebookService) {
   
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

                    alert('error');
                }
    }, function (error) {
            console.log('error');
    });
   
    
    
  }
//*******************************************************************************************
//login with Facebook
//*******************************************************************************************       
     $scope.loginFacebook = function()
    {
        FacebookService.authenticate().then(function(result){
            if(result)
            {
                $state.go('tabs.profile');
            }
            else
            {

                    alert('error');
            }
        },function(error){
             console.log('error');
        });
    }
}); 