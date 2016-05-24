mainApp.factory('ProviderServiceResource', function($http,$q,$base64) {
  
 var baseUrl = 'http://localhost:3000';
//*******************************************************************************************
//create a new provider service method
//******************************************************************************************* 
  function addProviderService(data) {
    return $q(function(resolve, reject) {
     $http({
        method : "POST",
        data:data,
        url :baseUrl+ "/v1/providerServiceService/addProviderService"
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
  });
       });
  };
//*******************************************************************************************
//update a provider service method
//*******************************************************************************************    
  function updateProviderService(data) {
    return $q(function(resolve, reject) {
     $http({
        method : "PUT",
        data:data,
        url :baseUrl+  "/v1/providerServiceService/updateProviderService"
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
  });
       });
  };
//*******************************************************************************************
//deactivate a provider service method
//*******************************************************************************************    
  function deactivateProviderService(data) {
    return $q(function(resolve, reject) {
     $http({
        method : "PUT",
        data:data,
        url :baseUrl+  "/v1/providerServiceService/deactivateProviderService"
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
  });
       });
  };      
//*******************************************************************************************
//method to get the provider service by Provider Id
//*******************************************************************************************      
function getProviderServiceByProviderId(providerId) {

   return $q(function(resolve, reject) {    
    $http({
        method : "GET",
        url :baseUrl+ "/v1/providerServiceService/getProviderServiceByProviderId/"+providerId
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
    });
   });
  };
//*******************************************************************************************
//method to get the provider service by Provider Id and Service Id
//*******************************************************************************************      
function getProviderServiceByProviderIdServiceId(providerId, serviceId) {

   return $q(function(resolve, reject) {    
    $http({
        method : "GET",
        url :baseUrl+ "/v1/providerServiceService/getProviderServiceByProviderIdServiceId/"+providerId + "/" + serviceId
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
    });
   });
  };
//*******************************************************************************************
//method to get the provider service by Provider Id Type and culture
//*******************************************************************************************      
function getProviderServiceByProviderIdTypeId(providerId, type,culture) {

   return $q(function(resolve, reject) {    
    $http({
        method : "GET",
        url :baseUrl+ "/v1/providerServiceService/getProviderServiceByProviderIdTypeId/"+providerId + "/" + type +"/"+culture
         }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
    });
   });
  };
    
  return {
    addProviderService: addProviderService,
    updateProviderService: updateProviderService,
    deactivateProviderService:deactivateProviderService,
    getProviderServiceByProviderId:getProviderServiceByProviderId, 
    getProviderServiceByProviderIdServiceId:getProviderServiceByProviderIdServiceId,
    getProviderServiceByProviderIdTypeId:getProviderServiceByProviderIdTypeId,
    getProviderByLocationForSearch:getProviderByLocationForSearch  
  }
});
