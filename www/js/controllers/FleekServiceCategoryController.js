 
mainApp.controller('FleekServiceCategoryController', function($scope,$state, ServiceTypeService,ErrorHelper) {
   
    
//*******************************************************************************************
//get categories
//*******************************************************************************************     
    $scope.loadData = function()
    {
       ServiceTypeService.getServiceType().then(function (result) {
           console.log(result);
       $scope.serviceCategoryList  = result;   
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
//Get Images Url
//*******************************************************************************************     
    $scope.getImage = function(picture)
    {
        return ServiceTypeService.getImage(picture); 
    }    
     $scope.loadData();
}); 