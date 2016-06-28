 
mainApp.controller('ProfileSettingsBasicController', function($scope,$state,UserService,UserUtils,ionicDatePicker) {
//*******************************************************************************************
//method to select the birthday , no scope
//*******************************************************************************************      
  selectDate = function(val)
  {
     console.log(val);
  }     
   var ipObj1 = {
      callback:selectDate
    };

    $scope.openDatePicker = function(){
      ionicDatePicker.openDatePicker(ipObj1);
    };    
//*******************************************************************************************
//method to go to other pages
//*******************************************************************************************      
  $scope.goTo = function(path)
    {
        $state.go(path);
    } 
//*******************************************************************************************
//load user information
//*******************************************************************************************     
    $scope.loadData = function()
    {
       
       UserService.getActualUser().then(function (result) {   
       $scope.user  = result;
         $scope.user.isOpenForFriendship = ( $scope.user.isOpenForFriendship==1);   
        }, function (error) {
           if(error)
           {
            if(error.managed)
            {
                ErrorHelper.showError('TODO: MANAGED');
            }
          else
              {
                ErrorHelper.showError(error);  
              }       
           }
        });   
    }
//*******************************************************************************************
//method to update the 
//*******************************************************************************************      
  $scope.updateUser = function(user)
  {
      UserService.updateUser(user).then(function (result) {
          
          $scope.goTo('tabs.profilesettings');
               
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
     $scope.loadData();
 
  
}); 