mainApp.controller('ProviderReservationInformationController', function($scope,$state,$stateParams,$ionicSlideBoxDelegate,ReservationService,UserUtils,ErrorHelper,Constants) {  
//*******************************************************************************************
//get the provider's basic information
//*******************************************************************************************     
$scope.reservation = $stateParams.reservation;

    
    $scope.goTo = function(path,parameters)
    {
        $state.go(path,parameters);
    }

    $scope.nextSlide = function(reservation) {
       
       if($ionicSlideBoxDelegate.currentIndex() < 1)
       {
            $ionicSlideBoxDelegate.next();
       }
       else{
           $scope.cancelReservation(reservation);
       }
           
  }
    
$scope.cancelReservation = function(reservation)
{
   reservation.state = Constants.REQUEST_STATES_RESERVATION.CANCELED; ReservationService.approvalReservation(reservation).then(function (result) {
        $scope.goTo('tabs.providerreservation',null);
        
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
$scope.approveReservation = function(reservation)
{
   reservation.state = Constants.REQUEST_STATES_RESERVATION.COMPLETED; ReservationService.approvalReservation(reservation).then(function (result) {
        $scope.goTo('tabs.providerrate',reservation);
        
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
//format date
//*******************************************************************************************     
    $scope.formatDate = function(date) {
       return moment(date).format('MM/DD/YYYY');
    };
    
}); 