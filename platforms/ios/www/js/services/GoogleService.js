mainApp.service('GoogleService', function($q,$compile) {
    
  function createMap(element,currentLocation)
    {
        
        var LatLng =  new google.maps.LatLng(43.07493,-89.381388);
        var mapOptions = {
        center: LatLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        return new google.maps.Map(element, mapOptions);
    }
    
     return {
        createMap: createMap
    }
});