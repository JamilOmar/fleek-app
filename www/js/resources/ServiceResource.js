mainApp.factory('ServiceResource', function($http,$q,$base64) {
  
  var baseUrl = 'http://localhost:3000';
//*******************************************************************************************
//get service
//*******************************************************************************************    
  function getServiceByTypeId(serviceType,cultureCode) {

   return $q(function(resolve, reject) {    
    $http({
        method : "GET",
        url :baseUrl+ "/v1/serviceService/getServiceByTypeId/" + serviceType +"/" + cultureCode
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
    });
   });
  };
 
  return {
    getServiceByTypeId: getServiceByTypeId
  }
});
