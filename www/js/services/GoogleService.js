mainApp.service('GoogleService', function($q,$compile) {
    
//*******************************************************************************************
//get Address
//*******************************************************************************************    
  function getPlace (map,element)
    {
        return $q(function(resolve, reject) {
    
         var searchBox = new google.maps.places.SearchBox(element);
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(element);
            
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    try
    {  
    var place = searchBox.getPlace();
           if (places.length>0)    
            {
              return resolve(place);
                                
            } 
            else
            {
               return resolve(null);
            }
    }catch(err)
        {
              return reject(null);
        }
  });    

    });
    }    
    
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
   function createMarker(map ,location,draggable,title)
    {
        
        var marker = new google.maps.Marker({
        map: map,
        draggable: draggable,
        animation: google.maps.Animation.DROP,  
        position: location,
        title:title    
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
         getAddressByLatLng:getAddressByLatLng,
         getPlace:getPlace
    }
});