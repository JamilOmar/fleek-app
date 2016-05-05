 
mainApp.controller('FleekServiceListController', function($scope,$state, $stateParams,ServiceService,serviceListId) {
   
    
//*******************************************************************************************
//get service list
//*******************************************************************************************       
    $scope.loadData = function()
    {
       ServiceService.getServiceByTypeId(serviceListId).then(function (result) {
       $scope.serviceList  = result;   
        }, function (error) {
            console.log('error');
        });   
    }  

    $scope.goTo = function(path,item)
    {
        $state.go(path,item);
    }
     $scope.loadData();
}); 