 
mainApp.controller('ProviderReservationController', function($scope,$state) {
   $scope.items = [
   {
     
       provider_image:"img/app/review-view-profile-placeholder.jpg",
       provider_name:"Jamil Falconi",
       provider_title:"Entrenador",
       provider_clients :12,
       provider_rate: 2,
       provider_client_image: "img/app/home/neworder.jpg",
       provider_distance: "6km",
       provider_zone: "La Luz"       
   
   
   },
       {
     
       provider_image:"img/app/review-view-profile-placeholder.jpg",
       provider_name:"Jamil Falconi",
       provider_title:"Entrenador",
       provider_clients :12,
       provider_rate: 5,
       provider_client_image: "img/app/home/neworder.jpg",
       provider_distance: "6km",
       provider_zone: "La Luz"       
   
   
   },
       {
     
       provider_image:"img/app/review-view-profile-placeholder.jpg",
       provider_name:"Jamil Falconi",
       provider_title:"Entrenador",
       provider_clients :12,
       provider_rate: 2,
       provider_client_image: "img/app/home/neworder.jpg",
       provider_distance: "6km",
       provider_zone: "La Luz"       
   
   
   },
       {
     
       provider_image:"img/app/review-view-profile-placeholder.jpg",
       provider_name:"Jamil Falconi",
       provider_title:"Entrenador",
       provider_clients :12,
       provider_rate: 2,
       provider_client_image: "img/app/home/neworder.jpg",
       provider_distance: "6km",
       provider_zone: "La Luz"       
   
   
   },
       {
     
       provider_image:"img/app/review-view-profile-placeholder.jpg",
       provider_name:"Jamil Falconi",
       provider_title:"Entrenador",
       provider_clients :12,
       provider_rate: 2,
       provider_client_image: "img/app/home/neworder.jpg",
       provider_distance: "6km",
       provider_zone: "La Luz"       
   
   
   },
       {
     
       provider_image:"img/app/review-view-profile-placeholder.jpg",
       provider_name:"Jamil Falconi",
       provider_title:"Entrenador",
       provider_clients :12,
       provider_rate: 2,
       provider_client_image: "img/app/home/neworder.jpg",
       provider_distance: "6km",
       provider_zone: "La Luz"       
   
   
   }
       
   ];    
    $scope.max = 5;
    $scope.goTo = function(path,item)
    {
        $state.go(path,item);
    }

}); 