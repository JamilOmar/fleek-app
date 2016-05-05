mainApp.service('FacebookService', function($q,FacebookResource,LocalStorage,Constants,UserService) {
//*******************************************************************************************
//method to login with Facebook
//*******************************************************************************************      
  function login() {
    return $q(function(resolve, reject) {
    FacebookResource.login().then(function (response) {
    
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
    FacebookResource.getAccessToken().then(function (response) {
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
    FacebookResource.getLoginStatus().then(function (response) {
       return resolve(response);
           
    }, function (error) {
             return reject(error);
  });
  })
  };
//*******************************************************************************************
//method to get the login status
//*******************************************************************************************      
  function authenticate() {
    return $q(function(resolve, reject) {
    getLoginStatus().then(function (response) {
        console.log(response);
         if(response.status === 'connected'){
            //the token is store
            LocalStorage.set(Constants.TOKEN,response.authResponse.accessToken);
              
            return resolve(true);
         }
        else{
            login().then(function(response){
             //the token is store
                LocalStorage.set(Constants.TOKEN,response.authResponse);
                resolve(true);
            },
                               
            function (error) {
             return reject(error);
            });
            
        }
           
    }, function (error) {
         return reject(error);
  });
  })
  };    
//*******************************************************************************************
//method to call the api
//*******************************************************************************************      
  function apiCall(obj, permissions) {
    return $q(function(resolve, reject) {
    FacebookResource.api(obj,permissions).then(function (response) {
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
    FacebookResource.logout().then(function (response) {
       return resolve(response);
           
    }, function (error) {
             return reject(error);
  });
  })
  };      
  return {
    login: login,
    getAccessToken : getAccessToken,
    getLoginStatus:getLoginStatus,
    logout:logout,
    apiCall:apiCall,
    authenticate:authenticate  
  }
});
