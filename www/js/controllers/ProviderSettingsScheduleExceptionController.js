 
mainApp.controller('ProviderSettingsScheduleExceptionController', function($scope,$state, $stateParams,$ionicModal,$cordovaDatePicker,$filter,ProviderScheduleService,ProviderScheduleExceptionService,UserUtils,$ionicPopup,Constants,ErrorHelper) {
     
//*******************************************************************************************
//get the basic data
//*******************************************************************************************        
 $scope.loadData = function()
    {
        
       var usr = UserUtils.getUserLocal();  ProviderScheduleService.getProviderScheduleByProviderIdAndDefault(usr.id).then(function (result) {   
      
           if(result)
            {
                 $scope.schedule =result; $scope.loadProviderScheduleExceptionData($scope.schedule.id);
            }
        }, function (error) {
           if(error)
           {
            if(error.managed)
            {
                ErrorHelper.showError('TODO: MANAGED');
            }
          else
              {
                ErrorHelper.showError(error);  
              }       
           }
        });   
    }    
//*******************************************************************************************
//get exception list
//*******************************************************************************************       
    $scope.loadProviderScheduleExceptionData = function(id)
    {
        ProviderScheduleExceptionService.getProviderScheduleExceptionByProviderScheduleId(  id).then(function (result) {
           $scope.scheduleExceptionList  = result;
            $scope.$broadcast('scroll.refreshComplete');
        }, function (error) {
            $scope.$broadcast('scroll.refreshComplete');
            if(error.managed)
            {
                ErrorHelper.showError('TODO: MANAGED');
            }
          else
              {
                ErrorHelper.showError(error);  
              }
        }); 
      
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
        if(scheduleException) //is not new
        {

            $scope.modal.isNew = false;
            scheduleException.date =  $scope.formatDate( scheduleException.date);
        }
        else
        {
            $scope.modal.isNew = true;
            scheduleException = { date: moment().add(1,"days").format('L'), providerScheduleId:$scope.schedule.id};
        }
        $scope.modal.scheduleException =scheduleException;
        $scope.modal.show()
    }
//*******************************************************************************************
//save shedule exception
//*******************************************************************************************     
    $scope.saveScheduleException = function(scheduleException) {
   
        
        if(!$scope.modal.isNew) // update
        {
            $scope.updateScheduleException(scheduleException);
        }
        else
        {
           $scope.addScheduleException(scheduleException); 
        }
    };
//*******************************************************************************************
//add a new schedule exception
//*******************************************************************************************     
    $scope.addScheduleException = function(scheduleException) {
      ProviderScheduleExceptionService.addProviderScheduleException(scheduleException).then(function (result) {  
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
//update the schedule exception
//*******************************************************************************************     
    $scope.updateScheduleException = function(scheduleException) {
       ProviderScheduleExceptionService.updateProviderScheduleException(scheduleException).then(function (result) {  
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
//delete the schedule exception
//*******************************************************************************************     
    $scope.deleteScheduleException = function(scheduleException) {
        
         ProviderScheduleExceptionService.getProviderScheduleExceptionyById(scheduleException.id).then(function (result) {  
          if(result.id) // exists
            {
                
                ProviderScheduleExceptionService.deactivateProviderScheduleException(result).then(function (result) {  
                    if(result)
                    {
                        $scope.loadData();
                    }
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
//action to delete the Service
//*******************************************************************************************  
 $scope.showDeleteConfirm = function(scheduleException) {
   var deletePopup = $ionicPopup.confirm({
     title: $filter('translate')('providerSettingsScheduleException_title'),
     template: '{{"providerSettingsScheduleException_delete_message" | translate}}'
   });
   deletePopup.then(function(res) {
     if(res) 
        {
            $scope.deleteScheduleException(scheduleException);
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
$scope.showDatePicker = function (exceptionDate) {
  
	var options = {
		date: exceptionDate,
		mode: 'date'
	};

    $cordovaDatePicker.show(options).then(function(date){
    $scope.modal.scheduleException.date = moment(date).format('L');     

	})};
//*******************************************************************************************
//format date
//*******************************************************************************************     
    $scope.formatDate = function(date) {
       return moment(date).format('MM/DD/YYYY');
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