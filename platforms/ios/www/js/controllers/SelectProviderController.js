
mainApp.controller('SelectProviderController', function($scope,$state,ProviderService,serviceId,FacebookService,UserUtils,ErrorHelper) {
 
//*******************************************************************************************
//get the providers list
//*******************************************************************************************       
    $scope.loadData = function()
    {
       ProviderService.getProviderByLocationForSearch(38.905016, -77.02907270000003,serviceId).then(function (result) {
         $scope.providers  = result;   
        },function (error) {
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
//round number
//*******************************************************************************************       
    $scope.roundNumber = function(number,type)
    {
        if(number!= undefined)
        return UserUtils.formatNumber(number) +" "+  type;
        else
            return 0 +" "+ type;
    }    
//*******************************************************************************************
//go to other page
//*******************************************************************************************       
    $scope.goTo = function(path,item)
    {
        $state.go(path,{provider:item});
    }
 
//*******************************************************************************************
//load the data
//*******************************************************************************************   

$scope.loadData(); 

}); 