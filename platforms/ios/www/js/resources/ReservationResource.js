mainApp.factory('ReservationResource', function($http,$q,$base64) {
  
 var baseUrl = 'http://localhost:3000';
//*******************************************************************************************
//create a new Reservation method
//******************************************************************************************* 
  function addReservation(data) {
    return $q(function(resolve, reject) {
     $http({
        method : "POST",
        data:data,
        url :baseUrl+ "/v1/reservationService/addReservation"
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
  });
       });
  };
//*******************************************************************************************
//update a Reservation method
//*******************************************************************************************    
  function updateReservation(data) {
    return $q(function(resolve, reject) {
     $http({
        method : "PUT",
        data:data,
         url :baseUrl+ "/v1/reservationService/updateReservation"
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
  });
       });
  };
//*******************************************************************************************
//deactivate a reservation method
//*******************************************************************************************    
  function deactivateReservation(data) {
    return $q(function(resolve, reject) {
     $http({
        method : "PUT",
        data:data,
       url :baseUrl+ "/v1/reservationService/deactivateReservation"
        }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
  });
       });
  };      
//*******************************************************************************************
//method to get the reservation times
//*******************************************************************************************      
function generateAvailableTimes(data) {

   return $q(function(resolve, reject) {    
    $http({
        method : "POST",
        data:data,
        url :baseUrl+ "/v1/reservationService/generateAvailableTimes/"
         }).then(function (result) {
            return resolve(result);
    }, function (error) {
            return reject(error);
    });
   });
  };

  return {
    addReservation: addReservation,
    updateReservation: updateReservation,
    deactivateReservation:deactivateReservation,
    generateAvailableTimes:generateAvailableTimes
  }
});
