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
                return reject({data: result.data, managed:true});
            }
           
    }, function (error) {
            return reject({data: error, managed:false});
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


