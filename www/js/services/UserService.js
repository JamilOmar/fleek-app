mainApp.service('UserService', function($q,UserResource,UserUtils,Constants) {
//*******************************************************************************************
//get actual user
//*******************************************************************************************    
  function getActualUser() {
 return $q(function(resolve, reject) {
    UserResource.getActualUser().then(function (response) {
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
    getActualUser:getActualUser
  }    
 
});