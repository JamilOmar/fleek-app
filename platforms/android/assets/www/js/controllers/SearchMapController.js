 
mainApp.controller('SearchMapController', function($scope,$state,GoogleService) {
  
  
    $scope.map = GoogleService.createMap(document.getElementById("map"));
}); 