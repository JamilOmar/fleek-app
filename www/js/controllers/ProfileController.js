 //*******************************************************************************************
//Controller that provides all the user's profile information
//*******************************************************************************************   
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
//*******************************************************************************************
//method for perform the personality check
//*******************************************************************************************       
    
 $scope.personalityCheck = function()
 {
     var personalityInformation = UserService.evaluatePersonality();
     
 }
    
//*******************************************************************************************
//method for load the profile image
//*******************************************************************************************       
$scope.loadProfileImage=function()
{

    return UserUtils.getProfileFacebookImage();
} 
//*******************************************************************************************
//method for load the data
//*******************************************************************************************  
$scope.loadData();
}); 