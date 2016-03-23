 
mainApp.controller('ProviderSettingsScheduleDetailController', function($scope,$state, $stateParams,$ionicModal,$cordovaDatePicker) {
    $scope.scheduleDay =$stateParams.scheduleDay;

   
//*******************************************************************************************
//get service list
//*******************************************************************************************       
    $scope.loadData = function()
    {
      
    }
    
    
//*******************************************************************************************
//create model the modal
//*******************************************************************************************      
 $ionicModal.fromTemplateUrl('modals/providerSettingsSchedule.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })      
//*******************************************************************************************
//open the modal
//*******************************************************************************************         
    $scope.openModal = function(schedule) {
        $scope.modal.scheduleDay =$scope.scheduleDay; 
        $scope.modal.schedule = schedule || { startTime: moment().format('LT') , endTime: moment().format('LT') ,providerScheduleId:$scope.scheduleDay.schedule.id , dayOfWeek: $scope.scheduleDay.day.day};
        $scope.modal.show()
    }
//*******************************************************************************************
//save Service
//*******************************************************************************************     
    $scope.saveSchedule = function(schedule) {
            console.log( schedule);
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
$scope.showDatePicker = function ( type) {
    var currentDate =  (type=='from')? moment($scope.modal.schedule.startTime,'HH:mm'): moment($scope.modal.schedule.endTime,'hh:mm A');
	var options = {
		date: currentDate.toDate(),
		mode: 'time'
	};

$cordovaDatePicker.show(options).then(function(date){
    
         if(type == 'from')
         {
		      $scope.modal.schedule.startTime = moment(date).format('LT');
         }
         else
         {
            $scope.modal.schedule.endTime = moment(date).format('LT');     
         }
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