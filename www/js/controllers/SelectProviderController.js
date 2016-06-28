
mainApp.controller('SelectProviderController', function($scope,$state,ProviderService,serviceId,UserUtils,ErrorHelper,Constants) {
$scope.queryInput ="";
 
//*******************************************************************************************
//get the providers list
//*******************************************************************************************       
    $scope.loadData = function()
    {
      $scope.search("");
    }
//*******************************************************************************************
//get the providers list
//*******************************************************************************************       
    $scope.query = function()
    {
     ProviderService.getProviderByLocationForSearch( $scope.queryInput,-0.180653,-77.0291,serviceId,$scope.offset, $scope.limit).then(function (result) {
        $scope.providers = $scope.providers.concat(result);
        $scope.offset = $scope.providers.length +1 ;
        $scope.limit =  $scope.offset + Constants.ITEMS_PER_REQUEST;
        $scope.stopRequest =(result.length<=0) ;
       $scope.$broadcast('scroll.infiniteScrollComplete'); 
        },function (error) {
         
          $scope.stopRequest =true;
          $scope.$broadcast('scroll.infiniteScrollComplete');
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
//click on search
//*******************************************************************************************       
    $scope.search = function(query)
    {
      $scope.queryInput = query;
      $scope.offset = 0 ;
      $scope.limit =Constants.ITEMS_PER_REQUEST;
      $scope.providers =[];
      $scope.stopRequest = false;    
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