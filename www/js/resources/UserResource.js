mainApp.factory('UserResource', function($http,$q,$base64) {
  
  var baseUrl = 'http://localhost:3000';

//*******************************************************************************************
//get user by id
//*******************************************************************************************    
  function getUserByUserName(id) {

   return $q(function(resolve, reject) {    
    $http({
        method : "GET",
        url :baseUrl+ "/v1/authenticationService/getUserByUserName/"+username
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
    });
   });
  };
//*******************************************************************************************
//get actual user
//*******************************************************************************************    
  function getActualUser() {

   return $q(function(resolve, reject) {    
    $http({
        method : "GET",
        url :baseUrl+ "/v1/userService/me"
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
    });
   });
  };    
 
  return {


    getUserByUserName:getUserByUserName,
    getActualUser:getActualUser
  }
});
