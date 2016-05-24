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
                return reject({data: result.data, managed:true});
            }
           
    }, function (error) {
            return reject({data: error, managed:false});
  });
  })
  };
 
  return {
    getServiceByTypeId: getServiceByTypeId
  }
});


