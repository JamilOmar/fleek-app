 
mainApp.controller('ProviderSettingsController', function($scope,$state,ProviderService,UserService) {
 
//*******************************************************************************************
//load provider
//*******************************************************************************************     
    $scope.loadData = function()
    {
       var usr = UserService.getUserLocal(); ProviderService.getProviderById(usr.id).then(function (result) {   
       $scope.serviceCategoryList  = result;   
        }, function (error) {
           if(error)
           {
             console.log(error);        
           }
        });   
    }
     $scope.loadData();
 
  
}); 