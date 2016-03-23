 
mainApp.controller('ProviderSettingsServiceListController', function($scope,$state, $stateParams,$ionicModal,ServiceService,serviceListId) {
   
    
//*******************************************************************************************
//get service list
//*******************************************************************************************       
    $scope.loadData = function()
    {
       ServiceService.getServiceByTypeId(serviceListId).then(function (result) {
       $scope.serviceList  = result;   
        }, function (error) {
            console.log('error');
        });   
    }
    
    
//*******************************************************************************************
//create model the modal
//*******************************************************************************************      
 $ionicModal.fromTemplateUrl('modals/providerSettingsServicePrice.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })      
//*******************************************************************************************
//open the modal
//*******************************************************************************************         
    $scope.openModal = function(service) {
        $scope.modal.service = service;
        $scope.modal.show()
    }
//*******************************************************************************************
//save Service
//*******************************************************************************************     
    $scope.saveService = function(service) {
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