mainApp.service('UserRatingService', function($q,UserRatingResource,Constants) {
  
//*******************************************************************************************
//create new user rating method
//*******************************************************************************************       
  function addUserRating(rating) {
    return $q(function(resolve, reject) {
    UserRatingResource.addUserRating(rating).then(function (response) {
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
//public methods 
//*******************************************************************************************          
 
  return {
    addUserRating: addUserRating
   
  }
});

