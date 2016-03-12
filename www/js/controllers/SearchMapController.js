 
mainApp.controller('SearchMapController', function($scope,$state,$compile) {
   $scope.loadData = function()
   {
  
   }
          var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
   var mapOptions = {
         center: myLatlng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
}); 