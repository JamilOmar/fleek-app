mainApp.factory('ProviderScheduleExceptionResource', function($http,$q,$base64) {
  
 var baseUrl = 'http://localhost:3000';
//*******************************************************************************************
//create a new provider schedule exception method
//******************************************************************************************* 
  function addProviderScheduleException(data) {
    return $q(function(resolve, reject) {
     $http({
        method : "POST",
        data:data,
        url :baseUrl+ "/v1/providerScheduleExceptionService/addProviderScheduleException"
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
  });
       });
  };
//*******************************************************************************************
//update a provider schedule exception method
//*******************************************************************************************    
  function updateProviderScheduleException(data) {
    return $q(function(resolve, reject) {
     $http({
        method : "PUT",
        data:data,
        url :baseUrl+  "/v1/providerScheduleExceptionService/updateProviderScheduleException"
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
  });
       });
  };
//*******************************************************************************************
//deactivate a provider schedule exception method
//*******************************************************************************************    
  function deactivateProviderScheduleException(data) {
    return $q(function(resolve, reject) {
     $http({
        method : "PUT",
        data:data,
        url :baseUrl+  "/v1/providerScheduleExceptionService/deactivateProviderScheduleException"
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
  });
       });
  };      
//*******************************************************************************************
//method to get the provider schedule exception
//*******************************************************************************************      
function getProviderScheduleExceptionyById(providerScheduleExceptionId) {

   return $q(function(resolve, reject) {    
    $http({
        method : "GET",
        url :baseUrl+ "/v1/providerScheduleExceptionService/getProviderScheduleExceptionyById/"+providerScheduleExceptionId
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
    });
   });
  };
//*******************************************************************************************
//method to get the provider schedule by provider schedule Id
//*******************************************************************************************      
function getProviderScheduleExceptionByProviderScheduleId(providerScheduleId) {

   return $q(function(resolve, reject) {    
    $http({
        method : "GET",
        url :baseUrl+ "/v1/providerScheduleExceptionService/getProviderScheduleExceptionByProviderScheduleId/"+providerScheduleId
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
    });
   });
  };
  return {
    addProviderScheduleException: addProviderScheduleException,
    updateProviderScheduleException: updateProviderScheduleException,
    deactivateProviderScheduleException:deactivateProviderScheduleException,
    getProviderScheduleExceptionyById:getProviderScheduleExceptionyById, 
    getProviderScheduleExceptionByProviderScheduleId:getProviderScheduleExceptionByProviderScheduleId
  }
});
