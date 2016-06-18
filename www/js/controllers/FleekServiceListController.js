 
mainApp.controller('FleekServiceListController', function($scope,$state, $stateParams,ServiceService,serviceListId,ErrorHelper) {
   
    
//*******************************************************************************************
//get service list
//*******************************************************************************************       
    $scope.loadData = function()
    {
       ServiceService.getServiceByTypeId(serviceListId).then(function (result) {
       $scope.serviceList  = result;   
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

    $scope.goTo = function(path,item)
    {
        $state.go(path,item);
    }
     $scope.loadData();
}); 