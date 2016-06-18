  
mainApp.controller('ProviderController', function($scope,$state,$stateParams,ProviderService,ProviderServiceService) {  
//*******************************************************************************************
//get the provider's basic information
//*******************************************************************************************     
$scope.provider = $stateParams.provider;    
//*******************************************************************************************
//go to method
//*******************************************************************************************  
    $scope.goTo = function(path,parameters)
    {
        var providerService = {
            
            provider : $scope.provider ,
            selectedService : parameters
            
        };
        $state.go(path,{providerService:providerService});
    }
//*******************************************************************************************
//get the provider's schedule
//*******************************************************************************************     
    $scope.loadData = function()
    {   
       var providerInformation ={};
        console.log($scope.provider);
       ProviderServiceService.getProviderServiceByProviderId($scope.provider.id).then(function (result) {
             $scope.items = result;
        }, function (error) {
            console.log('error');
        });   
    } 
//calling the method to load data    
  $scope.loadData();     
//***************************************************************      
    
}); 