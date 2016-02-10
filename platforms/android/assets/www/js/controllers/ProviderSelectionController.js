  
mainApp.controller('ProviderSelectionController', function($scope,$state,$ionicSlideBoxDelegate) {  

    
    $scope.goTo = function(path,parameters)
    {
        $state.go(path,parameters);
    }

    $scope.nextSlide = function() {
       
       if($ionicSlideBoxDelegate.currentIndex() < 1)
       {
            $ionicSlideBoxDelegate.next();
       }
       else{
           $scope.goTo('tabs.chooseProfile');
       }
           
  }
}); 