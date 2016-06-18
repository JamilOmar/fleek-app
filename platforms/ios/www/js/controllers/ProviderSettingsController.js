 
mainApp.controller('ProviderSettingsController', function($scope,$state,ProviderService,UserService,UserUtils,ErrorHelper) {
//*******************************************************************************************
//method to go to other pages
//*******************************************************************************************      
  $scope.goTo = function(path,obj)
    {
        $state.go(path,obj);
    }
//*******************************************************************************************
//method to go to the map option
//*******************************************************************************************      
  $scope.goToMap = function(provider)
    {
         $scope.goTo('tabs.providermap',{providerInformation:{provider:provider, new:false}});
    }  
  
  
 
//*******************************************************************************************
//method to update the 
//*******************************************************************************************      
  $scope.updateProvider = function(data)
  {
      ProviderService.updateProvider(data).then(function (result) {
          
          $scope.goTo('tabs.profilesettings',null);
               
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
//*******************************************************************************************
//load provider
//*******************************************************************************************     
    $scope.loadData = function()
    {
       var usr = UserUtils.getUserLocal(); 
       ProviderService.getProviderById(usr.id).then(function (result) {   
      
           if(result)
            {
                 $scope.data  = result;
                 $scope.data.isForMale = ( $scope.data.isForMale ==1);
                  $scope.data.isForFemale = ( $scope.data.isForFemale ==1);
                  $scope.data.allowsKids = ( $scope.data.allowsKids ==1);
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
     $scope.loadData();
 
  
}); 