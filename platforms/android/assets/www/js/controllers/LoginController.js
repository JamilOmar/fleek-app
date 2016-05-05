 
mainApp.controller('LoginController', function($scope,$state,AuthenticationService) {
   
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
}); 