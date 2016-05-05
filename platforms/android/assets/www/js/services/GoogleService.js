mainApp.service('GoogleService', function($q,$compile) {
//*******************************************************************************************
//get Address
//*******************************************************************************************    
  function getAddress (query)
    {
        return $q(function(resolve, reject) {
        var geocoder = new google.maps.Geocoder();
        var req = {};
        req.address = query;
        geocoder.geocode(req, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {    
            return resolve(results);
                                
            } 
            else {
                   return reject(status);
                }
        });
    });
    }
//*******************************************************************************************
//get address by latlng
//*******************************************************************************************    
  function getAddressByLatLng (lat,lng)
    {
        return $q(function(resolve, reject) {
        var geocoder = new google.maps.Geocoder();
        var req = {};
        req.location = {lat:lat, lng:lng};
        geocoder.geocode(req, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK && results[1])    
            {
                return resolve(results[1]);
                                
            } 
            else {
                   return reject(status);
                }
        });
    });
    }    
//*******************************************************************************************
//create marker
//*******************************************************************************************        
   function createMarker(map ,location,draggable)
    {
        
        var marker = new google.maps.Marker({
        map: map,
        draggable: draggable,
        animation: google.maps.Animation.DROP,  
        position: location
        });
        return marker;
    }
//*******************************************************************************************
//create map
//*******************************************************************************************        
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
        createMap: createMap,
         getAddress:getAddress,
         createMarker:createMarker,
         getAddressByLatLng:getAddressByLatLng
    }
});