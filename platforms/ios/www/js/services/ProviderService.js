mainApp.service('ProviderService', function($q,ProviderResource,LocalStorage,Constants) {
  
//*******************************************************************************************
//create new provider method
//*******************************************************************************************        
  function addProvider(provider) {
    return $q(function(resolve, reject) {
    ProviderResource.addProvider(provider).then(function (response) {
        var result = response.data;
        if(((result.responseCode != undefined && result.responseCode == Constants.RESPONSE_SUCCESS )))
            {
                return resolve(data);
            }
        else
            {
                return resolve(null);
            }
           
    }, function (error) {
            return reject(null);
  });
  })
  };
//*******************************************************************************************
//update provider method
//*******************************************************************************************     
  function updateProvider(provider) {
       return $q(function(resolve, reject) {
        ProviderResource.updateProvider(provider).then(function (response) {
       var result = response.data;
        if(((result.responseCode != undefined && result.responseCode == Constants.RESPONSE_SUCCESS )))
            {
                return resolve(data);
            }
        else
            {
                return resolve(null);
            }
           
    }, function (error) {
            return reject(null);
  });
  })
  };
//*******************************************************************************************
//method to get the provider
//*******************************************************************************************        
  function getProviderById(providerId){
  return $q(function(resolve, reject) {
    ProviderResource.getProviderById(providerId).then(function (response) {
        var result = response.data;
        if(((result.responseCode != undefined && result.responseCode == Constants.RESPONSE_SUCCESS )))
            {
                 
               
                return resolve(result);
            }
        else
            {
                return resolve(null);
            }
           
    }, function (error) {
            return reject(null);
  });
  })
  };
 
  return {
    addProvider: addProvider,
    updateProvider: updateProvider,
    getProviderById:getProviderById
  }
});

