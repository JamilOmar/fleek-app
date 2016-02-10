 
mainApp.controller('ReviewController', function($scope,$state,$ionicSlideBoxDelegate) {
   
  $scope.saveUser = function()
  {
    $state.go('chooseProfile');
    
  }
   $scope.nextSlide = function() {
       
       if($ionicSlideBoxDelegate.currentIndex() < 2)
       {
    $ionicSlideBoxDelegate.next();
       }
       else{
           $state.go('chooseProfile');
       }
           
  }
}); 