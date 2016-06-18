 
mainApp.controller('ProviderMapController', function($scope,$state,$stateParams,$timeout,$q,ProviderService,GoogleService,ErrorHelper) {
var searchEventTimeout = undefined;
$scope.marker= undefined;    
$scope.providerMap = {};
$scope.providerMap.locations=[];
//*******************************************************************************************
//method to go to other pages
//*******************************************************************************************      
  $scope.goTo = function(path,obj)
    {
        $state.go(path,obj);
    }     

//*******************************************************************************************
//load the provider's data
//*******************************************************************************************        
 $scope.loadData = function()
    {
    
     $scope.isNew =$stateParams.providerInformation.new;
     $scope.providerMap.provider =$stateParams.providerInformation.provider;
     $scope.map = GoogleService.createMap(document.getElementById("map"));
     $scope.providerMap.query=$stateParams.providerInformation.provider.address;
    }     
//*******************************************************************************************
//watch when the user inputs information
//*******************************************************************************************  
$scope.$watch("providerMap.query", function(query) {
    
    if(!$scope.providerMap.selectedLocation || query !== $scope.providerMap.selectedLocation.formatted_address)
    {
        if (searchEventTimeout) $timeout.cancel(searchEventTimeout);
            searchEventTimeout = $timeout(function() {
            if(!query){
            
                $scope.cleanLocation(true);
            
            }else
                if(query.length > 3)
                GoogleService.getAddress(query).then(function (result) {
                $scope.providerMap.locations=result; 
                }, function (error) {
                    
                });      
            });
    }
  });    
//*******************************************************************************************
//create the provider
//*******************************************************************************************      
$scope.createProvider = function()
  {

    $scope.providerMap.provider.latitute =  $scope.providerMap.selectedLocation.geometry.location.lat();
    $scope.providerMap.provider.longitude =  $scope.providerMap.selectedLocation.geometry.location.lng();
    $scope.providerMap.provider.address =  $scope.providerMap.selectedLocation.formatted_address;
    if($scope.isNew)
    {
        
    
    $state.go('tabs.providersettings',{provider:$scope.providerMap.provider});
    
      ProviderService.addProvider( $scope.providerMap.provider).then(function (result) {   

        $state.goTo('tabs.profilesettings',{provider:$scope.providerMap.provider});
 
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
    else
        ProviderService.updateProvider( $scope.providerMap.provider).then(function (result) {
          
          $scope.goTo('tabs.profilesettings',null);
               
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
//*******************************************************************************************
//select the location
//*******************************************************************************************  
$scope.selectLocation= function(location)
{
    
      $scope.cleanLocation(false); 
      $scope.marker = GoogleService.createMarker($scope.map, location.geometry.location,true);
      $scope.marker.addListener('dragend', $scope.selectLocationByLatLng );
      $scope.map.setCenter(location.geometry.location);
      $scope.providerMap.selectedLocation = location;
      $scope.providerMap.query = location.formatted_address;   
}

//*******************************************************************************************
//set the location by lat and lng
//*******************************************************************************************  
$scope.selectLocationByLatLng = function (event)
{
    if(event)
     GoogleService.getAddressByLatLng(event.latLng.lat(),event.latLng.lng()).then(function (result) {
                    $scope.providerMap.selectedLocation = result;
                    $scope.providerMap.query = result.formatted_address;   
                }, function (error) {
                    $scope.cleanLocation(true); 
                });        
}
//*******************************************************************************************
//clean the location
//*******************************************************************************************  
$scope.cleanLocation= function(clearSelectedLocation)
{
     if($scope.marker !=undefined)
        $scope.marker.setMap(null);
        $scope.providerMap.locations = [];
    if(clearSelectedLocation)
        {
            $scope.providerMap.selectedLocation = undefined;
            $scope.providerMap.query = undefined; 
        }
}
//*******************************************************************************************
//load data and create the map
//*******************************************************************************************  
   $scope.loadData();
    
 });  
  