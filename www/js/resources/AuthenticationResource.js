mainApp.factory('AuthenticationResource', function($http,$q,$base64) {
  
  var baseUrl = 'http://localhost:3000';
//*******************************************************************************************
//login method
//*******************************************************************************************    
  function authenticate(username,password) {
   return $q(function(resolve, reject) {
    $http.defaults.headers.common['Authorization'] = 'Basic ' + $base64.encode(username + ':' + password);  
    $http({
        method : "POST",
        url :baseUrl+ "/v1/authenticationService/login"
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
  });
       });
  };
//*******************************************************************************************
//create new user method
//******************************************************************************************* 
  function signup(data) {
    return $q(function(resolve, reject) {
     $http({
        method : "POST",
        url :baseUrl+ "/v1/authenticationService/signup"
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
  });
       });
  };
//*******************************************************************************************
//get user by Username method
//*******************************************************************************************    
  function getUserByUserName(data,callback) {

   return $q(function(resolve, reject) {    
    $http({
        method : "GET",
        url :baseUrl+ "/v1/authenticationService/getUserByUserName"
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
    });
   });
  };
 
  return {
    authenticate: authenticate,
    signup: signup,
    getUserByUserName:getUserByUserName
  }
});
