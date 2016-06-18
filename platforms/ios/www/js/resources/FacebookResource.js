mainApp.factory('FacebookResource', function($q,Constants) {
//*******************************************************************************************
//method to login with Facebook
//*******************************************************************************************      
  function login() {
    return $q(function(resolve, reject) {
    facebookConnectPlugin.login(Constants.FACEBOOK_LOGIN_PERMISSIONS,function (response) {
       return resolve(response);
           
    }, function (error) {
             return reject(error);
  });
  })
  };
//*******************************************************************************************
//method to get the access token
//*******************************************************************************************      
  function getAccessToken() {
    return $q(function(resolve, reject) {
    facebookConnectPlugin.getAccessToken(function (response) {
       return resolve(response);
           
    }, function (error) {
             return reject(error);
  });
  })
  };    
//*******************************************************************************************
//method to get the login status
//*******************************************************************************************      
  function getLoginStatus() {
    return $q(function(resolve, reject) {
    facebookConnectPlugin.getLoginStatus(function (response) {
       return resolve(response);
           
    }, function (error) {
             return reject(error);
  });
  })
  };
//*******************************************************************************************
//method to call the api
//*******************************************************************************************      
  function apiCall(obj) {
    return $q(function(resolve, reject) {
    facebookConnectPlugin.api(obj,Constants.FACEBOOK_LOGIN_PERMISSIONS,function (response) {
       return resolve(response);
           
    }, function (error) {
             return reject(error);
  });
  })
  };
    
//*******************************************************************************************
//method to logout
//*******************************************************************************************      
  function logout() {
    return $q(function(resolve, reject) {
        try
            {
    facebookConnectPlugin.logout(function (response) {
       return resolve(response);
           
    }, function (error) {
             return reject(error);
  });}
        catch(err)
            {
             return reject(error);
            }
  })
  };      
  return {
    login: login,
    getAccessToken : getAccessToken,
    getLoginStatus:getLoginStatus,
    logout:logout,
    apiCall:apiCall
  }
});
