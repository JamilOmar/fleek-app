
//Main Controller that makes the calendar
//***************************************************************
mainApp.controller('CalendarController', function($scope,$state,$stateParams,ProviderScheduleService,ReservationService,ErrorHelper) {
    $scope.calendarClass ={
    date : moment(),
    providerInformation : null,
    };
//*******************************************************************************************
//get the provider's basic information
//*******************************************************************************************     
$scope.providerService = $stateParams.providerService;    
//*******************************************************************************************
//go to method
//*******************************************************************************************  
    $scope.goTo = function(path,parameters)
    {
        var data = {
            
            provider : $scope.providerService.provider,
            selectedDate : {day :$scope.calendarClass.selectedDate , time:  parameters},
            selectedService: $scope.providerService.selectedService
        };
        $state.go(path,{metadata:{data:data,path:"tabs.providerselection"}});
    }    

//*******************************************************************************************
//get provider's info
//*******************************************************************************************     
    $scope.loadData = function()
    {
       var providerInformation ={}; ProviderScheduleService.getProviderScheduleCompleteByProviderIdAndDefault($scope.providerService.provider.id).then(function (result) {
           if(result.providerScheduleDay)
               {
                 providerInformation.enabledDays = result.providerScheduleDay.distinct(function(a, b){ return a.dayOfWeek == b.dayOfWeek });
               }
            if(result.providerScheduleException)
               {
                providerInformation.exceptionDays = result.providerScheduleException.distinct(function(a, b){ return a.dayOfWeek == b.dayOfWeek });
               }
           $scope.calendarClass.providerInformation = providerInformation;
       
        }, function (error) {
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
//Method to communicate the controler with the view for retreive the selected date
//***************************************************************
    $scope.press = function(data) {
        if( data.selectedDate.isEnabled)
        {
          
             ReservationService.generateAvailableTimes({providerId:$scope.providerService.provider.id,serviceId:$scope.providerService.selectedService.id , averageTimePerSession : $scope.providerService.selectedService.averageTimePerSession ,date :data.selectedDate.date.toDate()}).then(function (result) {
           
        $scope.items = result;
        }, function (error) {
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
        else
            {
                 $scope.items = null;
            }
    };
//***************************************************************
//calling the method to load data    
  $scope.loadData();     
//***************************************************************  
}); 