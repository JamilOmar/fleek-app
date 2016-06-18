mainApp.service('ReservationService', function($q,ReservationResource,LocalStorage,Constants) {
  
 var baseUrl = 'http://localhost:3000';
//*******************************************************************************************
//create a new Reservation method
//******************************************************************************************* 
  function addReservation(data) {
   return $q(function(resolve, reject) {
    ReservationResource.addReservation
(data).then(function (response) {
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
//update a Reservation method
//*******************************************************************************************    
  function updateReservation(data) {
     return $q(function(resolve, reject) {
    ReservationResource.updateReservation
(data).then(function (response) {
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
//deactivate a reservation method
//*******************************************************************************************    
  function deactivateReservation(data) {
    return $q(function(resolve, reject) {
    ReservationResource.deactivateReservation
(data).then(function (response) {
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
//method to get the reservation times
//*******************************************************************************************      
function generateAvailableTimes(data) {

   return $q(function(resolve, reject) {
    ReservationResource.generateAvailableTimes
(data).then(function (response) {
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
    addReservation: addReservation,
    updateReservation: updateReservation,
    deactivateReservation:deactivateReservation,
    generateAvailableTimes:generateAvailableTimes
  }
});
