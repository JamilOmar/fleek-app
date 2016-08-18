mainApp.factory('UserRatingResource', function($http,$q,$base64) {
  
 var baseUrl = 'http://localhost:3000';
//*******************************************************************************************
//create new user rating method
//******************************************************************************************* 
  function addUserRating(data) {
    return $q(function(resolve, reject) {
     $http({
        method : "POST",
        data:data,
        url :baseUrl+ "/v1/userRatingService/addUserRating"
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
  });
       });
  };

  return {
    addUserRating: addUserRating
  }
});
