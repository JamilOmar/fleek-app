 
mainApp.controller('LoginController', function($scope,$state,AuthenticationService) {
   
  $scope.login = function(user)
  {
      AuthenticationService.authenticate(user.username,user.password ).then(function (result) {   
          if(result)
            {
                $state.go('tabs.home');
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