mainApp.factory('ProviderResource', function($http,$q,$base64) {
  
 var baseUrl = 'http://localhost:3000';
//*******************************************************************************************
//create new provider method
//******************************************************************************************* 
  function addProvider(data) {
    return $q(function(resolve, reject) {
     $http({
        method : "POST",
        data:data,
        url :baseUrl+ "/v1/providerService/addProvider"
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
  });
       });
  };
//*******************************************************************************************
//update provider method
//*******************************************************************************************    
  function updateProvider(data) {
    return $q(function(resolve, reject) {
     $http({
        method : "PUT",
        data:data,
        url :baseUrl+ "/v1/providerService/updateProvider"
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
  });
       });
  };  
//*******************************************************************************************
//method to get the provider
//*******************************************************************************************      
function getProviderById(providerId) {

   return $q(function(resolve, reject) {    
    $http({
        method : "GET",
        url :baseUrl+ "/v1/providerService/getProviderById/"+providerId
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
    });
   });
  };
 //*******************************************************************************************
//method for get providers by coordinates and service id
//*******************************************************************************************      
function getProviderByLocationForSearch(latitude, longitude,serviceId) {

   return $q(function(resolve, reject) {    
    $http({
        method : "GET",
        url :baseUrl+ "/v1/providerService/getProviderByLocationForSearch/"+latitude + "/" + longitude+ "/" + serviceId
         }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
    });
   });
  };  
  return {
    addProvider: addProvider,
    updateProvider: updateProvider,
    getProviderById:getProviderById,
    getProviderByLocationForSearch:getProviderByLocationForSearch
  }
});
