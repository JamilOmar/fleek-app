 
mainApp.controller('CreateUserController', function($scope,$state,$ionicSlideBoxDelegate,AuthenticationService,FacebookService,UserUtils,ErrorHelper) {
//*******************************************************************************************
//method to create the user using fleek's service
//*******************************************************************************************      
  $scope.createUser = function(user)
  {
      AuthenticationService.signup(user).then(function (result) {   
        $state.go('tabs.profile');
               
    }, function (error) {
          if(error.managed)
            {
                ErrorHelper.showError('TODO: MANAGED');
            }
          else
              {
                ErrorHelper.showError(error);  
              }
         
  });  
  }
//*******************************************************************************************
//populated the user information from Facebook user
//*******************************************************************************************    
  $scope.loadData = function()
    {
      var facebookUser = UserUtils.getFacebookUserLocal();
      console.log(facebookUser);
      $scope.user ={};
      $scope.user.email =  facebookUser.email;
      $scope.user.name = facebookUser.first_name;
      $scope.user.lastname = facebookUser.last_name;
      $scope.user.facebookId =facebookUser.id;
      if(facebookUser.picture &&facebookUser.picture.data)
          {
              
              $scope.user.pictureUrl =facebookUser.picture.data.url;
          }
      /*
      if(facebookUser.gender)
      {
          switch(facebookUser.gender)
          {
              case "male" : $scope.user.
                  
          }
      }
        console.log( $scope.user);*/
 
    }
//*******************************************************************************************
//method to move to the next slide
//*******************************************************************************************    
$scope.nextSlide = function(user) {
       
       if($ionicSlideBoxDelegate.currentIndex() < 1)
       {
        
         AuthenticationService.getUserByUserName(user.username).then(function (result) {
          if(result.id == undefined)
            {
                 $scope.createUser(user);
            }
            else
            {
                    
                 ErrorHelper.showError('TODO: ERROR');
            }
    }, function (error) {
             ErrorHelper.showError(error);
  });  
           
      }
           
  }
//*******************************************************************************************
//load data
//*******************************************************************************************      
  $scope.loadData();  
}); 