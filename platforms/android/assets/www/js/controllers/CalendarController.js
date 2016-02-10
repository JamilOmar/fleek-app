//Main Controller that makes the calendar
//***************************************************************
mainApp.controller('CalendarController', function($scope,$state) {
    $scope.dayClass ={
        date : moment(),
        selectedDays : []};
//Method to create the days
//***************************************************************    
    $scope.setCustomerDays = function(selectedDate) {
         $state.go("tabs.providerselection",selectedDate);
    };
//Method to communicate the controler with the view for retreive the selected date
//***************************************************************
    $scope.press = function(data) {
        console.log(data);
         $scope.items = [   
    { id: 39 },
    { id: 40 },
    { id: 41 },
    { id: 42 },
    { id: 43 },
    { id: 44 }
  ];
    };
//***************************************************************  
}); 