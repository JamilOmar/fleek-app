 
mainApp.controller('FleekServiceCategoryController', function($scope,$state, ServiceTypeService) {
   
    
//*******************************************************************************************
//get categories
//*******************************************************************************************     
    $scope.loadData = function()
    {
       ServiceTypeService.getServiceType().then(function (result) {
           console.log(result);
       $scope.serviceCategoryList  = result;   
        }, function (error) {
            console.log('error');
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