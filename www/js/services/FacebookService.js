mainApp.service('FacebookService', function($q,FacebookResource,LocalStorage,Constants,UserUtils,AuthenticationService) {
//*******************************************************************************************
//method to login with Facebook
//*******************************************************************************************      
  function login() {
    return $q(function(resolve, reject) {
    FacebookResource.login().then(function (response) {
    
       authenticateWithFleek(response.authResponse.userID,response.authResponse.accessToken).then
            (resolve,reject);
           
    }, function (error) {
              reject(error);
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
//method to authenticate
//*******************************************************************************************      
  function authenticate() {
    return $q(function(resolve, reject) {
    getLoginStatus().then(function (response) {
     
         if(response.status === 'connected'){
            authenticateWithFleek(response.authResponse.userID,response.authResponse.accessToken).then
            (resolve,reject);
         }
        else{
            login().then(function(response){
             authenticateWithFleek(response.authResponse.userID,response.authResponse.accessToken).then
            (resolve,reject);
            },
                               
            function (error) {
             reject(error);
            });
            
        }
           
    }, function (error) {
       reject(error);
  });
  })
  };
//*******************************************************************************************
//method to authenticate using fleek's system
//*******************************************************************************************      
  function authenticateWithFleek(facebookId,token) {
    return $q(function(resolve, reject) {
       
     AuthenticationService.getUserByFacebookId(facebookId).then(function (response) {
        apiCall(Constants.FACEBOOK_ME_FIELDS).then(function (userInfo){
        //store the facebook user    
        UserUtils.storeFacebookUserLocal(userInfo);
        //the token is store
        UserUtils.storeToken(token);
         if(response.id){ // user exists
            UserUtils.storeUserLocal(response); 
            return resolve({exists: true,facebookUser:userInfo});
         }
         else
         {
             return resolve({exists: false,facebookUser:userInfo});
         }
        },reject);
     
    }, function (error) {
         return reject(error);
  });
  })};        
//*******************************************************************************************
//method to call the api
//*******************************************************************************************      
  function apiCall(obj) {
    return $q(function(resolve, reject) {
    FacebookResource.apiCall(obj).then(function (response) {
       return resolve(response);
           
    }, function (error) {
             return reject(error);
  });
  })
  }; 
//*******************************************************************************************
//method to get the user's picture
//*******************************************************************************************      
  function getUserPicture(id) {
    return $q(function(resolve, reject) {
    FacebookResource.apiCall(id+Constants.FACEBOOK_FRIEND_FIELDS).then(function (response) {
        var url = "";
        if(response.picture && response.picture.data)
        {
           url = response.picture.data.url;
        }
        
       return resolve(url);
           
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
    authenticate:authenticate,
    getUserPicture:getUserPicture
  }
});
