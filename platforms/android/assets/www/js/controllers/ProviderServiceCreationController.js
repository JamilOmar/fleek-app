 
mainApp.controller('ProviderServiceCreationController', function($scope,$state,$ionicSlideBoxDelegate) {
   $scope.serviceList = [
   
   {
   title:"Haircut",
       image:"img/app/home/neworder.jpg"
   
   
   },
    {
   title:"Tattoo & Piercing",
       image:"img/app/home/neworder.jpg"
   
   },
    {
   title:"Nail",
       image:"img/app/home/neworder.jpg"
   
   
   },
   {
   title:"Make up",
       image:"img/app/home/neworder.jpg"
   
   
   },
       {
   title:"Sports & Trainning",
       image:"img/app/home/neworder.jpg"
   
   },
       
    {
   title:"Cleanning",
       image:"img/app/home/neworder.jpg"
   
   },
   ];
    $scope.nextSlide = function() {
       
      
    $ionicSlideBoxDelegate.next();
       
       
           
    }
    
     $scope.dayClass ={
        date : moment(),
        selectedDays : []};
//Method to create the days
//***************************************************************    
    $scope.setCustomerDays = function(selectedDate) {
         $state.go("tabs.providerselection",selectedDate);
    };
    $scope.goTo = function(path)
    {
        $state.go(path);
    }

}); 