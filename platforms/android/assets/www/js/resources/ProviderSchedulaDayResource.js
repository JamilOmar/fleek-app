mainApp.factory('ProviderScheduleDayResource', function($http,$q,$base64) {
  
 var baseUrl = 'http://localhost:3000';
//*******************************************************************************************
//create new provider schedule day method
//******************************************************************************************* 
  function addProviderScheduleDay(data) {
    return $q(function(resolve, reject) {
     $http({
        method : "POST",
        data:data,
        url :baseUrl+ "/v1/providerScheduleDayService/addProviderScheduleDay"
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
  });
       });
  };
//*******************************************************************************************
//update provider schedule day method
//*******************************************************************************************    
  function updateProviderScheduleDay(data) {
    return $q(function(resolve, reject) {
     $http({
        method : "PUT",
        data:data,
        url :baseUrl+ "/v1/providerScheduleDayService/updateProviderScheduleDay"
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
  });
       });
  };
//*******************************************************************************************
//deactivate a provider schedule day method
//*******************************************************************************************    
  function deactivateProviderScheduleDay(data) {
    return $q(function(resolve, reject) {
     $http({
        method : "PUT",
        data:data,
        url :baseUrl+  "/v1/providerScheduleDayService/deactivateProviderScheduleDay"
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
  });
       });
  };          
//*******************************************************************************************
//method to get the provider schedule day
//*******************************************************************************************      
function getProviderScheduleDayById(providerScheduleDayId) {

   return $q(function(resolve, reject) {    
    $http({
        method : "GET",
        url :baseUrl+ "/v1/providerScheduleDayService/getProviderScheduleDayById/"+providerScheduleDayId
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
    });
   });
  };
//*******************************************************************************************
//method to get the provider schedule day by provider schedule
//*******************************************************************************************      
function getProviderScheduleDayByProviderScheduleId(providerScheduleId) {

   return $q(function(resolve, reject) {    
    $http({
        method : "GET",
        url :baseUrl+ "/v1/providerScheduleDayService/getProviderScheduleDayByProviderScheduleId/"+providerScheduleId
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
    });
   });
  };
//*******************************************************************************************
//method to get the provider schedule day by provider schedule and day of week
//*******************************************************************************************      
function getProviderScheduleDayByProviderScheduleIdDayOfWeek(providerScheduleId,dayOfWeek) {

   return $q(function(resolve, reject) {    
    $http({
        method : "GET",
        url :baseUrl+ "/v1/providerScheduleDayService/getProviderScheduleDayByProviderScheduleIdDayOfWeek/"+providerScheduleId + "/" + dayOfWeek
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
    });
   });
  }; 
  return {
    addProviderScheduleDay: addProviderScheduleDay,
      
    updateProviderScheduleDay: updateProviderScheduleDay,
    deactivateProviderScheduleDay:deactivateProviderScheduleDay, getProviderScheduleDayById:getProviderScheduleDayById,
      getProviderScheduleDayByProviderScheduleId:getProviderScheduleDayByProviderScheduleId,
      getProviderScheduleDayByProviderScheduleIdDayOfWeek:getProviderScheduleDayByProviderScheduleIdDayOfWeek
  }
});
