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
                return reject({data: result.data, managed:true});
            }
           
    }, function (error) {
            return reject({data: error, managed:false});
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
                return reject({data: result.data, managed:true});
            }
           
    }, function (error) {
            return reject({data: error, managed:false});
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
                
                return reject({data: result.data, managed:true});
            }
           
    }, function (error) {
            return reject({data: error, managed:false});
  });
  })
  };
//*******************************************************************************************
//method for get providers by coordinates and service id
//*******************************************************************************************        
  function getProviderByLocationForSearch(latitude, longitude,serviceId){
  return $q(function(resolve, reject) {
    ProviderResource.getProviderByLocationForSearch(latitude, longitude,serviceId).then(function (response) {
        var result = response.data;
        if(((result.responseCode != undefined && result.responseCode == Constants.RESPONSE_SUCCESS )))
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
//*******************************************************************************************
//public methods 
//*******************************************************************************************          
 
  return {
    addProvider: addProvider,
    updateProvider: updateProvider,
    getProviderById:getProviderById,
    getProviderLocal:getProviderLocal,
    getProviderByLocationForSearch:getProviderByLocationForSearch
  }
});

