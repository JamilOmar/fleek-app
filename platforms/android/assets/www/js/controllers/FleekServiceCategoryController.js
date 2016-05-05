 
mainApp.controller('FleekServiceCategoryController', function($scope,$state, ServiceTypeService) {
   
    
//*******************************************************************************************
//get categories
//*******************************************************************************************     
    $scope.loadData = function()
    {
       ServiceTypeService.getServiceType().then(function (result) {   
       $scope.serviceCategoryList  = result;   
        }, function (error) {
            console.log('error');
        });   
    }
     $scope.loadData();
}); 