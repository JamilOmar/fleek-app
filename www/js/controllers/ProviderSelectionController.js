  
mainApp.controller('ProviderSelectionController', function($scope,$state,$stateParams,UserUtils,ReservationService,$ionicSlideBoxDelegate,$ionicTabsDelegate) { 
    
//*******************************************************************************************
//set thab to firts screen
//*******************************************************************************************     
 $scope.goToFirstTab = function(index) {
    $ionicTabsDelegate.select(0);
  }        
 $scope.selectTabWithIndex = function(index) {
    $ionicTabsDelegate.select(index);
  }    
//*******************************************************************************************
//method to lock the slide
//*******************************************************************************************         
 $scope.lockSlide = function () {
        $ionicSlideBoxDelegate.enableSlide( false );
    } 
//*******************************************************************************************
//get the provider's basic information
//*******************************************************************************************     
$scope.reservation = $stateParams.reservation;   
    console.log($scope.reservation);
//*******************************************************************************************
//go to method
//*******************************************************************************************  
    
    $scope.goTo = function(path,parameters)
    {
        $state.go(path,parameters);
    }

    $scope.nextSlide = function() {
       
       if($ionicSlideBoxDelegate.currentIndex() < 1)
       {
           //save the reservation
            $scope.saveReservation(); 
       }
       else{
           //completed succesfully
           $scope.goTo('tabs.chooseProfile');
       }
           
  }
    $scope.saveReservation = function() {
        
    var reservation = {
        
        customerId : UserUtils.getUserLocal().id,
        providerId : $scope.reservation.provider.id,
        address : $scope.reservation.provider.address,
        startTime : $scope.reservation.selectedDate.time.from,
        date: $scope.reservation.selectedDate.day.date.toDate(),
        providerScheduleId : $scope.reservation.provider.Metadata.providerScheduleId,
        reservationDetail: []
    }
    if( $scope.reservation.selectedService.averageTimePerSession >0)
    {
    var time = moment($scope.reservation.selectedService.averageTimePerSession,"minutes").format('HH:mm:ss');
    var reservationDetail = {
        serviceId : $scope.reservation.selectedService.serviceId,
        duration : time
    }
    reservation.reservationDetail.push(reservationDetail);
     ReservationService.addReservation(reservation).then(function (result) {
          $ionicSlideBoxDelegate.next();
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
           
  }
    
//*******************************************************************************************
//format date
//*******************************************************************************************     
    $scope.formatDate = function(date) {
       return moment(date).format('MM/DD/YYYY');
    };      
}); 