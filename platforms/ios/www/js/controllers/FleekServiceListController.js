 
mainApp.controller('FleekServiceListController', function($scope,$state) {
   $scope.serviceList = [
   
   {
   title:"1",
       image:"../img/app/home/neworder.jpg"
   
   
   },
    {
   title:"2",
       image:"../img/app/home/neworder.jpg"
   
   },
    {
   title:"3",
       image:"../img/app/home/neworder.jpg"
   
   
   },
     {
   title:"3",
       image:"../img/app/home/neworder.jpg"
   
   
   },
        {
   title:"3",
       image:"../img/app/home/neworder.jpg"
   
   
   },
        {
   title:"3",
       image:"../img/app/home/neworder.jpg"
   
   
   },
        {
   title:"3",
       image:"../img/app/home/neworder.jpg"
   
   
   },
   
   ];
    
    $scope.goTo = function(path,item)
    {
        $state.go(path,item);
    }

}); 