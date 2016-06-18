mainApp.service('ProviderServiceService', function($q,ProviderServiceResource,LocalStorage,Constants) {
  
//*******************************************************************************************
//create a new provider service method
//*******************************************************************************************        
  function addProviderService(providerService) {
    return $q(function(resolve, reject) {
    ProviderServiceResource.addProviderService
(providerService).then(function (response) {
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
//update a provider service method
//*******************************************************************************************     
  function updateProviderService(providerService) {
       return $q(function(resolve, reject) {
        ProviderServiceResource.updateProviderService(providerService).then(function (response) {
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
//deactivate a provider service method
//*******************************************************************************************     
  function deactivateProviderService(providerService) {
       return $q(function(resolve, reject) {
        ProviderServiceResource.deactivateProviderService(providerService).then(function (response) {
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
//method to get the provider service by Provider Id
//*******************************************************************************************        
  function getProviderServiceByProviderId(providerId){
  return $q(function(resolve, reject) {
    ProviderServiceResource.getProviderServiceByProviderId(providerId).then(function (response) {
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
//method to get the provider service by Provider Id and Service Id
//*******************************************************************************************        
  function getProviderServiceByProviderIdServiceId(providerId,serviceId){
  return $q(function(resolve, reject) {
    ProviderServiceResource.getProviderServiceByProviderIdServiceId(providerId,serviceId).then(function (response) {
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
//method to get the provider service by Provider Id Type and culture
//****************************
//*******************************************************************************************        
  function getProviderServiceByProviderIdTypeId(providerId, type,culture){
  return $q(function(resolve, reject) {
    ProviderServiceResource.getProviderServiceByProviderIdTypeId(providerId, type,culture).then(function (response) {
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
  return {
    addProviderService: addProviderService,
    updateProviderService: updateProviderService,
    deactivateProviderService:deactivateProviderService,
    getProviderServiceByProviderId:getProviderServiceByProviderId, 
    getProviderServiceByProviderIdServiceId:getProviderServiceByProviderIdServiceId,
    getProviderServiceByProviderIdTypeId:getProviderServiceByProviderIdTypeId  
  }
});

