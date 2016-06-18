 
mainApp.controller('ProviderSettingsScheduleController', function($scope,$state, $stateParams, ProviderScheduleService,UserUtils,ErrorHelper) {

//*******************************************************************************************
//get the default provider schedule
//*******************************************************************************************       
    $scope.loadData = function()
    {
        
       var usr = UserUtils.getUserLocal();  ProviderScheduleService.getProviderScheduleByProviderIdAndDefault(usr.id).then(function (result) {   
      
           if(result)
            {
                  $scope.schedule  = {id:result.id,name:result.name};
            }
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
//Go to other form
//*******************************************************************************************     
    $scope.goTo = function(path,item)
    {
        $state.go(path,item);
    }
//*******************************************************************************************
//loading data
//*******************************************************************************************      
     $scope.loadData();
}); 