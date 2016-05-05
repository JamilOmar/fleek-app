 
mainApp.controller('CreateUserController', function($scope,$state,$ionicSlideBoxDelegate,AuthenticationService) {
   
  $scope.createUser = function(user)
  {
        
      AuthenticationService.signup(user).then(function (result) {   
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
  
  $scope.nextSlide = function(user) {
       
       if($ionicSlideBoxDelegate.currentIndex() < 2)
       {
        
         AuthenticationService.getUserByUserName(user.username).then(function (result) {   
          if(result.data.id == undefined)
            {
               $ionicSlideBoxDelegate.next();
            }
            else
            {
                    
                alert('error');
            }
    }, function (error) {
            console.log('error');
  });  
           
        }
       else
       {
           $state.go('chooseProfile');
       }
           
  }
  
  
}); 