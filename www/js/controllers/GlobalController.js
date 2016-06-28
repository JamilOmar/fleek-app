mainApp.controller('GlobalController', function($scope,$rootScope,$state,$ionicSlideBoxDelegate,$ionicModal,RealTimeService,UserUtils) {
$rootScope.isProvider = false;
 

//*******************************************************************************************
//notifications
//*******************************************************************************************      
  $rootScope.$on('loadEvents', function() {
     var usr = UserUtils.getUserLocal();
     var loaded =false; 
     $rootScope.isProvider = usr.isProvider;
     var client = RealTimeService.connectToServer(usr.username);
     var record =  client.record.getRecord( 'user/'+usr.id);
      record.subscribe('notifications',function( value ){
          
          if(loaded)
                $rootScope.openModal();
          loaded =true;
            });
      
;})  

//*******************************************************************************************
//create model the modal
//*******************************************************************************************      
 $ionicModal.fromTemplateUrl('modals/rateService.html', {
    scope: $rootScope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $rootScope.modal = modal
  })      
//*******************************************************************************************
//open the modal
//*******************************************************************************************         
    $rootScope.openModal = function() {
      
         $rootScope.modal.show();        
    }  
  
}); 