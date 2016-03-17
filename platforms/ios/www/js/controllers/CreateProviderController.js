 
mainApp.controller('CreateProviderController', function($scope,$state,$ionicSlideBoxDelegate,ProviderService,GoogleService) {
   
  $scope.createProvider = function(provider)
  {
        
      ProviderService.provider(provider).then(function (result) {   
          if(result)
            {
                $state.go('tabs.home');
            }
            else
            {        
                alert('error');
            }
    }, function (error) {
            console.log('error');
  });  
  }
  
  $scope.nextSlide = function(user) {
       
       if($ionicSlideBoxDelegate.currentIndex() < 2)
       { 
             $scope.map = GoogleService.createMap(document.getElementById("map"));
           $ionicSlideBoxDelegate.next();
          
       }
  }
 
  
}); 