mainApp.service('AuthenticationService', function($q,AuthenticationResource,LocalStorage,Constants,UserService) {
  
//*******************************************************************************************
//authenticated the user
//*******************************************************************************************        
  function authenticate(username,password) {
    return $q(function(resolve, reject) {
    AuthenticationResource.authenticate(username,password).then(function (response) {
        var result = response.data;
        if(((result.responseCode != undefined && result.responseCode == Constants.RESPONSE_SUCCESS ))&& result.data.authenticated)
            {
                 
                //the token is store
                LocalStorage.set(Constants.TOKEN,result.data.token);
                //the user is store 
                UserService.storeUserLocal(result.data.user); 
                return resolve(true);
            }
        else
            {
                return resolve(false);
            }
           
    }, function (error) {
            return reject(null);
  });
  })
  };
//*******************************************************************************************
//user signup
//*******************************************************************************************     
  function signup(user) {
       return $q(function(resolve, reject) {
    AuthenticationResource.signup(user).then(function (response) {
        var result = response.data;
        if(((result.responseCode != undefined && result.responseCode == Constants.RESPONSE_SUCCESS )))
            {
                 
                //the token is store
                LocalStorage.set(Constants.TOKEN,result.data.token);
                //the user is store 
                UserService.storeUserLocal(result.data.user); 
                return resolve(result);
            }
        else
            {
                return reject(result);
            }
           
    }, function (error) {
            return reject(null);
  });
  })
  };
//*******************************************************************************************
//retreive the user by username
//*******************************************************************************************        
  function getUserByUserName(username) {
  return $q(function(resolve, reject) {
    AuthenticationResource.getUserByUserName(username).then(function (response) {
        var result = response.data;
        if(((result.responseCode != undefined && result.responseCode == Constants.RESPONSE_SUCCESS )))
            {
                 
               
                return resolve(result.data);
            }
        else
            {
                return resolve({});
            }
           
    }, function (error) {
            return reject(null);
  });
  })
  };
 
  return {
    authenticate: authenticate,
    signup: signup,
    getUserByUserName:getUserByUserName
  }
});