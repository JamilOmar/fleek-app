 
mainApp.controller('ProviderSettingsServiceListController', function($scope,$state, $stateParams,$ionicModal,$filter,ProviderServiceService,UserService,serviceListId,$ionicPopup,Constants,ErrorHelper) {
var usr =UserService.getUserLocal();           
//*******************************************************************************************
//get service list
//*******************************************************************************************       
    $scope.loadData = function()
    {
        ProviderServiceService.getProviderServiceByProviderIdTypeId(usr.id, serviceListId , usr.cultureCode).then(function (result) {
           $scope.serviceList  = result;
        }, function (error) {
            if(!error)
            ErrorHelper.showError(error);
        });   
    }
    
    
//*******************************************************************************************
//create model the modal
//*******************************************************************************************      
 $ionicModal.fromTemplateUrl('modals/providerSettingsServicePrice.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
    //creates the time table    
    $scope.modal.time= Constants.TIME;     
  })      
//*******************************************************************************************
//open the modal and retreive the information from the provider services
//*******************************************************************************************         
    $scope.openModal = function(service) {
        
        ProviderServiceService.getProviderServiceByProviderIdServiceId(usr.id, service.serviceId).then(function (result) {  
          if(result.serviceId) // exists
            {
              
                result.currencyCode = 'MX';
                $scope.modal.service = result;
                $scope.modal.isNew = false;
               
            }
            else //is new
            {
            $scope.modal.isNew = true;   
            $scope.modal.service = 
                {
                   providerId : usr.id,
                   serviceId : service.serviceId,
                   name : service.name,
                   currencyCode : 'MX',
                   price : 0,
                   averageTimePerSession : 0, 
                   isCustom : false
                };                
            }
        $scope.modal.selectedTime =$filter('filter')($scope.modal.time, { value:  $scope.modal.service.averageTimePerSession }, true)[0];  
        $scope.modal.show();        
    }, function (error) {
            if(!error)
            ErrorHelper.showError(error);
    });
        
        
        
        
      
    }
//*******************************************************************************************
//save Service
//*******************************************************************************************     
    $scope.saveService = function(service) {
        //selected value from the ddl
        service.averageTimePerSession =$scope.modal.selectedTime.value;
        //ready to save or update
        if(!$scope.modal.isNew) // update
        {
            $scope.updateService(service);
        }
        else
        {
           $scope.addService(service); 
        }
          
    };
    
//*******************************************************************************************
//add new Service
//*******************************************************************************************     
    $scope.addService = function(service) {
      ProviderServiceService.addProviderService(service).then(function (result) {  
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
//update Service
//*******************************************************************************************     
    $scope.updateService = function(service) {
       ProviderServiceService.updateProviderService(service).then(function (result) {  
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
//delete Service
//*******************************************************************************************     
    $scope.deleteService = function(service) {
        
         ProviderServiceService.getProviderServiceByProviderIdServiceId(usr.id, service.serviceId).then(function (result) {  
          if(result.serviceId) // exists
            {
                
                ProviderServiceService.deactivateProviderService(result).then(function (result) {  
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
 $scope.showDeleteConfirm = function(service) {
   var deletePopup = $ionicPopup.confirm({
     title: $filter('translate')('providerSettingsServicePrice_title'),
     template: '{{"providerSettingsServicePrice_delete_message" | translate}}'
   });
   deletePopup.then(function(res) {
     if(res) 
        {
            $scope.deleteService(service);
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