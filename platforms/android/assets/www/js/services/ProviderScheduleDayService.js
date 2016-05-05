mainApp.service('ProviderScheduleDayService', function($q,ProviderScheduleDayResource,LocalStorage,Constants) {
  
//*******************************************************************************************
//create new provider schedule day method
//*******************************************************************************************        
  function addProviderScheduleDay(providerScheduleDay) {
    return $q(function(resolve, reject) {
    ProviderScheduleDayResource.addProviderScheduleDay(providerScheduleDay).then(function (response) {
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
//update provider schedule day method
//*******************************************************************************************     
  function updateProviderScheduleDay(providerScheduleDay) {
       return $q(function(resolve, reject) {
        ProviderScheduleDayResource.updateProviderScheduleDay(providerScheduleDay).then(function (response) {
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
//deactivate provider schedule day method
//*******************************************************************************************     
  function deactivateProviderScheduleDay(providerScheduleDay) {
       return $q(function(resolve, reject) {
        ProviderScheduleDayResource.deactivateProviderScheduleDay(providerScheduleDay).then(function (response) {
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
//method to get the provider schedule day
//*******************************************************************************************        
  function getProviderScheduleDayById(providerScheduleDayId){
  return $q(function(resolve, reject) {
    ProviderScheduleDayResource.getProviderScheduleDayById(providerScheduleDayId).then(function (response) {
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
//method to get the provider schedule day by provider schedule
//*******************************************************************************************        
  function getProviderScheduleDayByProviderScheduleId(providerScheduleId){
  return $q(function(resolve, reject) {
    ProviderScheduleDayResource.getProviderScheduleDayByProviderScheduleId(providerScheduleId).then(function (response) {
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
//method to get the provider schedule day by provider schedule and day of week
//*******************************************************************************************        
  function getProviderScheduleDayByProviderScheduleIdDayOfWeek(providerScheduleId,dayOfWeek){
  return $q(function(resolve, reject) {
   console.log(providerScheduleId);
   console.log(dayOfWeek);   ProviderScheduleDayResource.getProviderScheduleDayByProviderScheduleIdDayOfWeek(providerScheduleId,dayOfWeek).then(function (response) {
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
    addProviderScheduleDay: addProviderScheduleDay,
    updateProviderScheduleDay:updateProviderScheduleDay,deactivateProviderScheduleDay:deactivateProviderScheduleDay,
    getProviderScheduleDayById:getProviderScheduleDayById,
    getProviderScheduleDayByProviderScheduleId:getProviderScheduleDayByProviderScheduleId,
      getProviderScheduleDayByProviderScheduleIdDayOfWeek:getProviderScheduleDayByProviderScheduleIdDayOfWeek
  }
});

