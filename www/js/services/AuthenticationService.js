mainApp.service('AuthenticationService', function($q,AuthenticationResource,LocalStorage,Constants) {
  
    
  function authenticate(username,password) {
    return $q(function(resolve, reject) {
    AuthenticationResource.authenticate(username,password).then(function (response) {
        var result = response.data;
        if(((result.responseCode == Constants.RESPONSE_SUCCESS ))&& result.data.authenticated)
            {
                 
                //the token is store
                LocalStorage.set(Constants.TOKEN,result.data.token);
                //the user is store 
                LocalStorage.setObject(Constants.USER,result.data.user);
                return resolve(true);
            }
        else
            {
                return resolve(false);
            }
           
    }, function (error) {
            return reject(false);
  });
  })
  };
 
  function signup(data,callback) {
   AuthenticationResource.signup(data,callback);
  };
  function getUserByUserName(data,callback) {
    AuthenticationResource.getUserByUserName(data,callback);
  };
 
  return {
    authenticate: authenticate,
    signup: signup,
    getUserByUserName:getUserByUserName
  }
});
