mainApp.controller('MapController', function($scope,$state,$stateParams,$timeout,$q,ProviderService,GoogleService,ErrorHelper) {
$scope.data= {}; 
$scope.data.location =undefined
$scope.data.metadata = $stateParams.metadata;
//*******************************************************************************************
//method to go to other pages
//*******************************************************************************************      
  $scope.goTo = function(path,obj)
    {
  
        $state.go(path,{metadata:obj});
    }     

//*******************************************************************************************
//load the provider's data
//*******************************************************************************************        
 $scope.loadData = function()
    {
     
     $scope.map = GoogleService.createMap(document.getElementById("map"));
      var input = document.getElementById("pac-input");
 var searchBox = new google.maps.places.SearchBox(input);   
  google.maps.event.addListener(searchBox, 'places_changed', function() {
    try
    {  
    var places = searchBox.getPlaces();
           if (places.length>0)    
            {
                 
              $scope.selectLocation(places[0]);
                              
            } 
            else
            {
              return;
            }
    }catch(err)
        {
           if(error.managed)
            {
                ErrorHelper.showError('TODO: MANAGED');
            }
          else
              {
                ErrorHelper.showError(error);  
              }       
      
        }
  });        
    }
//*******************************************************************************************
//select the location
//*******************************************************************************************  
$scope.selectLocation= function(location)
{
    
      $scope.cleanLocation(); 
      $scope.data.marker = GoogleService.createMarker($scope.map, location.geometry.location,false,"");
     $scope.data.location =location.geometry.location;    $scope.map.setCenter(location.geometry.location);
     
//https://maps.googleapis.com/maps/api/staticmap?center=-0.148275,-78.4743&zoom=16&size=400x400&markers=color:red%7C-0.148275,-78.4743     
}
//*******************************************************************************************
//choose location
//*******************************************************************************************  
$scope.chooseLocation= function(location,address)
{
    $scope.data.metadata.data.location ={latitude:location.lat() , longitude : location.lng()};
     $scope.data.metadata.data.address =address;
 $scope.goTo($scope.data.metadata.path,$scope.data.metadata);
}
//*******************************************************************************************
//clean the location
//*******************************************************************************************  
$scope.cleanLocation= function(clearSelectedLocation)
{
    $scope.data.location =undefined;
     if($scope.marker !=undefined)
        $scope.marker.setMap(null);
}
//*******************************************************************************************
//Load the mapa
//******************************************************************************************* 
$scope.loadData();
}); 