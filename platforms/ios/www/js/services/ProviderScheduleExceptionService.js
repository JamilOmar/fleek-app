mainApp.service('ProviderScheduleExceptionService', function($q,ProviderScheduleExceptionResource,LocalStorage,Constants) {
  
//*******************************************************************************************
//create a new provider schedule exception method
//*******************************************************************************************        
  function addProviderScheduleException(providerScheduleException) {
    return $q(function(resolve, reject) {
    ProviderScheduleExceptionResource.addProviderScheduleException(providerScheduleException).then(function (response) {
        var result = response.data;
        if(((result.responseCode != undefined && result.responseCode == Constants.RESPONSE_SUCCESS )))
            {
                return resolve(result.data);
            }
        else
            {
                return reject(result.data);
            }
           
    }, function (error) {
            return reject(null);
  });
  })
  };
//*******************************************************************************************
//update a provider schedule exception method
//*******************************************************************************************     
  function updateProviderScheduleException(providerScheduleException) {
       return $q(function(resolve, reject) {
        ProviderScheduleExceptionResource.updateProviderScheduleException(providerScheduleException).then(function (response) {
       var result = response.data;
        if(((result.responseCode != undefined && result.responseCode == Constants.RESPONSE_SUCCESS )))
            {
                return resolve(result.data);
            }
        else
            {
                return reject(result.data);
            }
           
    }, function (error) {
            return reject(null);
  });
  })
  };
//*******************************************************************************************
//deactivate a provider schedule exception method
//*******************************************************************************************     
  function deactivateProviderScheduleException(providerScheduleException) {
       return $q(function(resolve, reject) {
        ProviderScheduleExceptionResource.deactivateProviderScheduleException(providerScheduleException).then(function (response) {
       var result = response.data;
        if(((result.responseCode != undefined && result.responseCode == Constants.RESPONSE_SUCCESS )))
            {
                return resolve(result.data);
            }
        else
            {
                return reject(result.data);
            }
           
    }, function (error) {
            return reject(null);
  });
  })
  };    
//*******************************************************************************************
//method to get the provider schedule exception
//*******************************************************************************************        
  function getProviderScheduleExceptionyById(providerScheduleExceptionId){
  return $q(function(resolve, reject) {
    ProviderScheduleExceptionResource.getProviderScheduleExceptionyById(providerScheduleExceptionId).then(function (response) {
        var result = response.data;
        if(((result.responseCode != undefined && result.responseCode == Constants.RESPONSE_SUCCESS )))
            {
                 
               
                return resolve(result.data);
            }
        else
            {
                return resolve({});
            }
           
    }, function (error) {
            return reject(null);
  });
  })
  };
//*******************************************************************************************
//method to get the provider schedule by provider schedule Id
//*******************************************************************************************        
  function getProviderScheduleExceptionByProviderScheduleId(providerScheduleId){
  return $q(function(resolve, reject) {
    ProviderScheduleExceptionResource.getProviderScheduleExceptionByProviderScheduleId(providerScheduleId).then(function (response) {
        var result = response.data;
        if(((result.responseCode != undefined && result.responseCode == Constants.RESPONSE_SUCCESS )))
            {
                 
               
                return resolve(result.data);
            }
        else
            {
                return resolve({});
            }
           
    }, function (error) {
            return reject(null);
  });
  })
  };
  
 
  return {
    addProviderScheduleException: addProviderScheduleException,
    updateProviderScheduleException:updateProviderScheduleException,deactivateProviderScheduleException:deactivateProviderScheduleException,
    getProviderScheduleExceptionyById:getProviderScheduleExceptionyById,
    getProviderScheduleExceptionByProviderScheduleId:getProviderScheduleExceptionByProviderScheduleId
  }
});

