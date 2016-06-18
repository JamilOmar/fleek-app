mainApp.service('AuthenticationService', function($q,AuthenticationResource,LocalStorage,Constants,UserUtils) {
  
//*******************************************************************************************
//authenticated the user
//*******************************************************************************************        
  function authenticate(username,password) {
    return $q(function(resolve, reject) {
    AuthenticationResource.authenticate(username,password).then(function (response) {
        var result = response.data;
        if(((result.responseCode != undefined && result.responseCode == Constants.RESPONSE_SUCCESS ))&& result.data.authenticated)
            {
                //the user is store 
                UserUtils.storeUserLocal(result.data.user); 
                return resolve(true);
            }
        else
            {
                return resolve(false);
            }
           
    }, function (error) {
            return reject({data:error, managed:false});
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
                 
                //the user is store 
                UserUtils.storeUserLocal(result.data.user); 
                return resolve(result);
            }
        else
            {
                return reject({data: result.data, managed:true});
            }
           
    }, function (error) {
            return reject({data: error, managed:false});
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
                return reject({data: result.data, managed:true});
            }
           
    }, function (error) {
            return reject({data: error, managed:false});
  });
  })
  };
//*******************************************************************************************
//retreive the user by facebook id
//*******************************************************************************************        
  function getUserByFacebookId(facebookId) {
  return $q(function(resolve, reject) {
    AuthenticationResource.getUserByFacebookId(facebookId).then(function (response) {
        var result = response.data;
        if(((result.responseCode != undefined && result.responseCode == Constants.RESPONSE_SUCCESS )))
            {
                 
               
                return resolve(result.data);
            }
        else
            {
                return reject({data: result.data, managed:true});
            }
           
    }, function (error) {
            return reject({data: error, managed:false});
  });
  })
  }; 
  return {
    authenticate: authenticate,
    signup: signup,
    getUserByUserName:getUserByUserName,
    getUserByFacebookId:getUserByFacebookId
  }
});
