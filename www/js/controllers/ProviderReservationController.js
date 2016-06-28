//*******************************************************************************************
//ProviderReservationControlle
//Author: Jamil Falconi
//*******************************************************************************************  
mainApp.controller('ProviderReservationController', function($scope,$state,ReservationService,UserUtils,ErrorHelper,Constants) {
//*******************************************************************************************
//get the providers list
//*******************************************************************************************       
    $scope.loadData = function()
    {
      $scope.refresh();
       
    }
//*******************************************************************************************
//refresh
//*******************************************************************************************       
    $scope.refresh = function()
    {
      $scope.offset = 0 ;
      $scope.limit =Constants.ITEMS_PER_REQUEST;
      $scope.providers =[];
      $scope.stopRequest = false;       
      $scope.query('scroll.refreshComplete');
 
        
    }
//*******************************************************************************************
//infinitive loop
//*******************************************************************************************       
    $scope.infinitive = function()
    {
       
      $scope.query('scroll.infiniteScrollComplete');
 
        
    }      
//*******************************************************************************************
//get the providers list
//*******************************************************************************************       
    $scope.query = function(broadcastAction)
    {
    var usr = UserUtils.getUserLocal();  ReservationService.getReservationByCustomerIdStatePaged( usr.id,Constants.REQUEST_STATES_RESERVATION.APPROVED,$scope.offset, $scope.limit).then(function (result) {
        console.log(result);
        $scope.providers = $scope.providers.concat(result);
        $scope.offset = $scope.providers.length +1 ;
        $scope.limit =  $scope.offset + Constants.ITEMS_PER_REQUEST;
        $scope.stopRequest =(result.length<=0) ;
 $scope.$broadcast(broadcastAction); 
        },function (error) {
         
          $scope.stopRequest =true;
         $scope.$broadcast(broadcastAction);
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
//go to other page
//*******************************************************************************************       
    $scope.goTo = function(path,item)
    {
        $state.go(path,{reservation:item});
    }
 //*******************************************************************************************
//format date
//*******************************************************************************************     
    $scope.formatDate = function(date) {
       return moment(date).format('MM/DD/YYYY');
    };   
//*******************************************************************************************
//load the data
//*******************************************************************************************   
$scope.loadData(); 
}); 