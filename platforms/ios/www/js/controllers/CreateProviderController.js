 
mainApp.controller('CreateProviderController', function($scope,$state,$ionicSlideBoxDelegate,ProviderService) {
 
//*******************************************************************************************
//next slide
//*******************************************************************************************   
  $scope.nextSlide = function(provider) {
       
       if($ionicSlideBoxDelegate.currentIndex() < 2)
       { 
           $ionicSlideBoxDelegate.next();
          
       }
  }
 //*******************************************************************************************
//validate provider telephone code
//*******************************************************************************************   
    $scope.confirmCode = function(provider) {
   
       $state.go('tabs.providermap',{provider:provider});
  }
 
  
}); 