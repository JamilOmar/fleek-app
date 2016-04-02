 
mainApp.controller('ProviderSettingsScheduleDetailController', function($scope,$state, $stateParams,$ionicModal,$cordovaDatePicker,$filter,ProviderScheduleDayService,UserService,$ionicPopup,Constants,ErrorHelper) {
    $scope.scheduleDay =$stateParams.scheduleDay;

   
//*******************************************************************************************
//get service list
//*******************************************************************************************       
    $scope.loadData = function()
    {
      ProviderScheduleDayService.getProviderScheduleDayByProviderScheduleIdDayOfWeek( $scope.scheduleDay.schedule.id,$scope.scheduleDay.day.day).then(function (result) {
           $scope.scheduleList  = result;
        }, function (error) {
           $scope.scheduleList = {};
            if(!error)
            ErrorHelper.showError(error);
        });   
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
      
     
   
          if(schedule) // exists
            {
     
                $scope.modal.isNew = false;   
                $scope.modal.schedule = schedule;
                
               
            }
            else //is new
            {
                $scope.modal.isNew = true;
                $scope.modal.schedule = 
                 { startTime: moment().format('LT') , endTime: moment().add("hours",2).format('LT') ,providerScheduleId:$scope.scheduleDay.schedule.id , dayOfWeek: $scope.scheduleDay.day.day
                 };       
            }
         $scope.modal.show();        
    }
//*******************************************************************************************
//save the schedule
//*******************************************************************************************     
    $scope.saveSchedule = function(schedule) {
        schedule.startTime =   moment( schedule.startTime,"LT").format("HH:mm:ss");
        schedule.endTime =  moment(schedule.endTime,"LT").format("HH:mm:ss");
        
        //ready to save or update
        if(!$scope.modal.isNew) // update
        {
            $scope.updateSchedule(schedule);
        }
        else
        {
           $scope.addSchedule(schedule); 
        }
    };
//*******************************************************************************************
//add new Schedule
//*******************************************************************************************     
    $scope.addSchedule = function(schedule) {
      ProviderScheduleDayService.addProviderScheduleDay(schedule).then(function (result) {  
          if(result)
            {
                $scope.closeModal();
                $scope.loadData();
            }
    }, function (error) {
             ErrorHelper.showError(error);
    });
    }; 
//*******************************************************************************************
//update Schedule
//*******************************************************************************************     
    $scope.updateSchedule = function(schedule) {
       ProviderScheduleDayService.updateProviderScheduleDay(schedule).then(function (result) {  
          if(result)
            {
                $scope.closeModal();
                $scope.loadData();
            }
           
    }, function (error) {
             if(!error)
            ErrorHelper.showError(error);
    });
    };
//*******************************************************************************************
//delete Schedule
//*******************************************************************************************     
    $scope.deleteSchedule = function(schedule) {
        
         ProviderScheduleDayService.getProviderScheduleDayById( schedule.id).then(function (result) {  
          if(result.id) // exists
            {
                
                ProviderScheduleDayService.deactivateProviderScheduleDay(result).then(function (result) {  
                   
                        $scope.loadData();
                    
                }, 
                function (error) {
                    if(!error)
                    ErrorHelper.showError(error);
                });
            }
            else //is new
            {
                $scope.loadData();
            }

    })};
    
//*******************************************************************************************
//action to delete the Schedule
//*******************************************************************************************  
 $scope.showDeleteConfirm = function(shedule) {
   var deletePopup = $ionicPopup.confirm({
     title: $filter('translate')('providerSettingsServicePrice_title'),
     template: '{{"providerSettingsServicePrice_delete_message" | translate}}'
   });
   deletePopup.then(function(res) {
     if(res) 
        {
            $scope.deleteSchedule(shedule);
        } 
   });
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
    var currentDate =  (type=='from')? moment($scope.modal.schedule.startTime,'hh:mm A'): moment($scope.modal.schedule.endTime,'hh:mm A');
	var options = {
		date: currentDate.toDate(),
		mode: 'time'
	};

$cordovaDatePicker.show(options).then(function(date){
    console.log(date);
    console.log( moment(date).format('LT'));
         if(type == 'from')
         {
		      $scope.modal.schedule.startTime = moment(date);
             
         }
         else
         {
            $scope.modal.schedule.endTime = moment(date);   
         }
        //$scope.$apply();
	})};
//*******************************************************************************************
//format time for grid
//*******************************************************************************************     
    $scope.formatTime = function(date) {
       return  moment(date,"HH:mm:ss").format('LT');
    };     
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