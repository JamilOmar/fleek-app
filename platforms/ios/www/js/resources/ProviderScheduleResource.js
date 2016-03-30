mainApp.factory('ProviderScheduleResource', function($http,$q,$base64) {
  
 var baseUrl = 'http://localhost:3000';
//*******************************************************************************************
//create a new Provider Schedule method
//******************************************************************************************* 
  function addProviderSchedule(data) {
    return $q(function(resolve, reject) {
     $http({
        method : "POST",
        data:data,
        url :baseUrl+ "/v1/providerScheduleService/addProviderSchedule"
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
  });
       });
  };
//*******************************************************************************************
//update a provider schedule method
//*******************************************************************************************    
  function updateProviderSchedule(data) {
    return $q(function(resolve, reject) {
     $http({
        method : "PUT",
        data:data,
        url :baseUrl+  "/v1/providerScheduleService/updateProviderSchedule"
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
  });
       });
  };
//*******************************************************************************************
//deactivate a provider schedule method
//*******************************************************************************************    
  function deactivateProviderSchedule(data) {
    return $q(function(resolve, reject) {
     $http({
        method : "PUT",
        data:data,
        url :baseUrl+  "/v1/providerScheduleService/deactivateProviderSchedule"
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
  });
       });
  };      
//*******************************************************************************************
//method to get the provider schedule
//*******************************************************************************************      
function getProviderScheduleById(providerScheduleId) {

   return $q(function(resolve, reject) {    
    $http({
        method : "GET",
        url :baseUrl+ "/v1/providerScheduleService/getProviderScheduleById/"+providerScheduleId
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
    });
   });
  };
//*******************************************************************************************
//method to get the provider schedule by provider Id
//*******************************************************************************************      
function getProviderScheduleByProviderId(providerId) {

   return $q(function(resolve, reject) {    
    $http({
        method : "GET",
        url :baseUrl+ "/v1/providerScheduleService/getProviderScheduleByProviderId/"+providerId
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
    });
   });
  };
//*******************************************************************************************
//method to get the provider schedule by provider Id and that is default
//*******************************************************************************************      
function getProviderScheduleByProviderIdAndDefault(providerId) {

   return $q(function(resolve, reject) {    
    $http({
        method : "GET",
        url :baseUrl+ "/v1/providerScheduleService/getProviderScheduleByProviderIdAndDefault/"+providerId
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
    });
   });
  };    
  return {
    addProviderSchedule: addProvider,
    updateProviderSchedule: updateProvider,
    deactivateProviderSchedule:deactivateProviderSchedule,
    getProviderScheduleById:getProviderScheduleById, 
    getProviderScheduleByProviderId:getProviderScheduleByProviderId
  }
});
