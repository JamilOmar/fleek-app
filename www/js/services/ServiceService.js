mainApp.service('ServiceService', function($q,ServiceResource,Constants) {
  
    
  function getServiceByTypeId(serviceType) {
    return $q(function(resolve, reject) {
    ServiceResource.getServiceByTypeId(serviceType,'es').then(function (response) {
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
 
  return {
    getServiceByTypeId: getServiceByTypeId
  }
});


