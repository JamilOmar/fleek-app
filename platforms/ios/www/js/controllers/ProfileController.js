 
mainApp.controller('ProfileController', function($scope,$state,UserService,UserUtils,ErrorHelper) {
 
//*******************************************************************************************
//get the providers list
//*******************************************************************************************       
    $scope.loadData = function()
    {
      UserService.getActualUser().then(function (result) {   
          if(result)
            {
            
               $scope.data = result;
            }
            else
            {

                ErrorHelper.showError('TODO:ERROR');
            }
    }, function (error) {
             ErrorHelper.showError(error);
    });
    }  
    $scope.goTo = function(path,item)
    {
        $state.go(path,item);
    }
    
    $scope.loadProfileImage=function()
    {
        
        return UserUtils.getProfileFacebookImage();
    }
    
      $scope.loadData();
}); 