mainApp.service('ProviderScheduleService', function($q,ProviderScheduleResource,LocalStorage,Constants) {
  
//*******************************************************************************************
//create new provider schedule method
//*******************************************************************************************        
  function addProviderSchedule(providerSchedule) {
    return $q(function(resolve, reject) {
    ProviderScheduleResource.addProviderSchedule(providerSchedule).then(function (response) {
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
//update provider schedule method
//*******************************************************************************************     
  function updateProviderSchedule(providerSchedule) {
       return $q(function(resolve, reject) {
        ProviderScheduleResource.updateProviderSchedule(providerSchedule).then(function (response) {
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
//deactivate provider schedule method
//*******************************************************************************************     
  function deactivateProviderSchedule(providerSchedule) {
       return $q(function(resolve, reject) {
        ProviderScheduleResource.deactivateProviderSchedule(providerSchedule).then(function (response) {
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
//method to get the provider schedule by id
//*******************************************************************************************        
  function getProviderScheduleById(providerScheduleId){
  return $q(function(resolve, reject) {
    ProviderScheduleResource.getProviderScheduleById(providerScheduleId).then(function (response) {
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
//method to get the provider schedule by provider
//*******************************************************************************************        
  function getProviderScheduleByProviderId(providerId){
  return $q(function(resolve, reject) {
    ProviderScheduleResource.getProviderScheduleByProviderId(providerId).then(function (response) {
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
//method to get the provider schedule by provider and default
//*******************************************************************************************        
  function getProviderScheduleByProviderIdAndDefault(providerId){
  return $q(function(resolve, reject) {
    ProviderScheduleResource.getProviderScheduleByProviderIdAndDefault(providerId).then(function (response) {
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
    addProviderSchedule: addProviderSchedule,
    updateProviderSchedule:updateProviderSchedule,deactivateProviderSchedule:deactivateProviderSchedule,
    getProviderScheduleById:getProviderScheduleById,
    getProviderScheduleByProviderId:getProviderScheduleByProviderId,
    getProviderScheduleByProviderIdAndDefault:getProviderScheduleByProviderIdAndDefault
  }
});

