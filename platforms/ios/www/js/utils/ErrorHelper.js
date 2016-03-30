mainApp.factory('ErrorHelper', function($ionicPopup) {
//*******************************************************************************************
//set value on local storage
//*******************************************************************************************  
 
    function showError(error) {
        var errorPopup = $ionicPopup.alert({
            title: 'Error',
            template: 'There it was an unexpected error.'
        });
        errorPopup.then(function(res) {
        });
    }
    
    return {
    showError: showError
  }
});