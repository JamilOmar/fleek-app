mainApp.factory('ServiceTypeResource', function($http,$q,$base64) {
  
  var baseUrl = 'http://localhost:3000';
//*******************************************************************************************
//get service Type    
//*******************************************************************************************    
  function getServiceType(cultureCode) {

   return $q(function(resolve, reject) {    
    $http({
        method : "GET",
        url :baseUrl+ "/v1/serviceTypeService/getServiceType/" + cultureCode
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
    });
   });
  };
 
  return {
    getServiceType: getServiceType
  }
});
