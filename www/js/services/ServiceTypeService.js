mainApp.service('ServiceTypeService', function($q,ServiceTypeResource,Constants) {
  
    
  function getServiceType() {
    return $q(function(resolve, reject) {
    ServiceTypeResource.getServiceType('es').then(function (response) {
        var result = response.data;
        if(((result.responseCode == Constants.RESPONSE_SUCCESS )))
            {
                return resolve(result.data);
            }
        else
            {
                return resolve({});
            }
           
    }, function (error) {
            return reject({});
  });
  })
  };
  function getImage(picture) {
    return ServiceTypeResource.getImage(picture);
  };    
 
  return {
    getServiceType: getServiceType,
    getImage:getImage  
  }
});


