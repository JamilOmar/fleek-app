mainApp.factory('ErrorHelper', function($ionicPopup) {
//*******************************************************************************************
//Show popup with error
//*******************************************************************************************  
 
    function showError(error) {
        log(error);
        var errorPopup = $ionicPopup.alert({
            title: 'Error',
            template: 'There it was an unexpected error.'
        });
        errorPopup.then(function(res) {
        });
    }
//*******************************************************************************************
//log error
//*******************************************************************************************      
   function log(error) {
        console.log(error);
    }    
    return {
    showError: showError,
    log:log    
  }
});