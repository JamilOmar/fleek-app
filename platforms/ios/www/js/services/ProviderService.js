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
                storeProviderLocal(result.data);
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
//update provider method
//*******************************************************************************************     
  function updateProvider(provider) {
       return $q(function(resolve, reject) {
        ProviderResource.updateProvider(provider).then(function (response) {
       var result = response.data;
        if(((result.responseCode != undefined && result.responseCode == Constants.RESPONSE_SUCCESS )))
            {
                storeProviderLocal(result.data);
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
//method to get the provider
//*******************************************************************************************        
  function getProviderById(providerId){
  return $q(function(resolve, reject) {
    ProviderResource.getProviderById(providerId).then(function (response) {
        var result = response.data;
        if(((result.responseCode != undefined && result.responseCode == Constants.RESPONSE_SUCCESS )))
            {
                 
                storeProviderLocal(result.data);
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
//method to get the local provider
//*******************************************************************************************        
  function getProviderLocal(){
  try
      {
          return LocalStorage.getObject(Constants.PROVIDER);
          
      }
      catch(err)
     {
         return {};
     }
  };    
//*******************************************************************************************
//method to store the local provider
//*******************************************************************************************        
  function storeProviderLocal(provider){
  try
      {
          LocalStorage.setObject(Constants.PROVIDER,provider);
          return true;
      }
      catch(err)
     {
         return false;
     }
  };
     
 
  return {
    addProvider: addProvider,
    updateProvider: updateProvider,
    getProviderById:getProviderById,
    getProviderLocal:getProviderLocal  
  }
});

