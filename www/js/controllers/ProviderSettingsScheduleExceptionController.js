 
mainApp.controller('ProviderSettingsScheduleExceptionController', function($scope,$state, $stateParams,$ionicModal,$cordovaDatePicker) {
     $scope.schedule =$stateParams.schedule;
    
//*******************************************************************************************
//get service list
//*******************************************************************************************       
    $scope.loadData = function()
    {
      
    }
    
    
//*******************************************************************************************
//create model the modal
//*******************************************************************************************      
 $ionicModal.fromTemplateUrl('modals/providerSettingsScheduleException.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })      
//*******************************************************************************************
//open the modal
//*******************************************************************************************         
    $scope.openModal = function(scheduleException) {
        $scope.modal.scheduleException = scheduleException || { date: moment().format('L') , providerScheduleId:"$scope.schedule.id" , description:""};
        $scope.modal.show()
    }
//*******************************************************************************************
//save Service
//*******************************************************************************************     
    $scope.saveScheduleException = function(scheduleException) {
          
        console.log(scheduleException);
        $scope.closeModal();
    };    
//*******************************************************************************************
//close the modal
//*******************************************************************************************     
    $scope.closeModal = function() {
        $scope.modal.service = null;
        $scope.modal.hide();
    };
//*******************************************************************************************
//destroy modal
//*******************************************************************************************     
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
    
    
//*******************************************************************************************
//Method to show the date picker
//*******************************************************************************************     
$scope.showDatePicker = function ( scheduleExceptionDate) {
  
	var options = {
		date: moment(scheduleExceptionDate,'L'),
		mode: 'date'
	};

    $cordovaDatePicker.show(options).then(function(date){
    $scope.modal.scheduleException.date = moment(date).format('L');     
    $scope.$apply();
	})};      
//*******************************************************************************************
//Go to other form
//*******************************************************************************************     
    $scope.goTo = function(path,item)
    {
        $state.go(path,item);
    }
//*******************************************************************************************
//loading data
//*******************************************************************************************      
     $scope.loadData();
}); 