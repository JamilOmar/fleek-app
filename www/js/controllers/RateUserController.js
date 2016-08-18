 
mainApp.controller('RateUserController', function($scope,$stateParams,$ionicSlideBoxDelegate,ReservationService,UserRatingService,UserUtils,ErrorHelper,Constants) {
//*******************************************************************************************
//get the reservation's basic information
//*******************************************************************************************     
$scope.reservation = $stateParams.reservation;
//user rating object     
$scope.userRating = {};    

//*************************************************  
//go to other location
//************************************************* 
  $scope.goTo = function(path,parameters)
    {
        $state.go(path,parameters);
    }  
  
//*************************************************  
//go to next slide
//*************************************************   
   $scope.nextSlide = function() {
       
       if($ionicSlideBoxDelegate.currentIndex() < 2)
       {
    $ionicSlideBoxDelegate.next();
       }
       else{
          $scope.goTo('chooseProfile',null);
       }
           
  }
//*******************************************************************************************
//create rating
//*******************************************************************************************     
    $scope.createRating = function()
    {   
      
       
        var usr = UserUtils.getUserLocal(); 
        $scope.userRating.fromUserId = usr.id;
        $scope.userRating.toUserId = null;
        $scope.userRating.reservationId = null; 
        $scope.userRating.description = null;
        $scope.userRating.rating = null;
        $scope.userRating.isForProvider = null; 
     UserRatingService.addUserRating( $scope.userRating).then(function (result) {
             $scope.goTo("tabs.fleekservicecategory",null);
        }, function (error) {
            console.log('error');
        });   
    }    
//*******************************************************************************************
//get the reservation
//*******************************************************************************************     
    $scope.loadData = function()
    {   
      
      console.log($scope.provider);
      $scope.data = {};
       ReservationService.getReservationById($scope.reservation.id).then(function (result) {
             $scope.data = result;
        }, function (error) {
            console.log('error');
        });   
    } 
//calling the method to load data    
  $scope.loadData();     
//***************************************************************      
       
}); 