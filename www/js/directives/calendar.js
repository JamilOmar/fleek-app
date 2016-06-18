mainApp.directive("calendar", function() {
    return {
        restrict: "AEC",
        templateUrl: "templates/calendar.html",
        scope: {
            calendarInfo: "=calendarInfo",
            press :"&onPress"
           
        },
//***************************************************************        
       link: function(scope) {
     
           scope.$watch('calendarInfo.providerInformation', function (providerInformation) {
             if(scope.calendarInfo.providerInformation)
              scope.createCalendar();
           });
           scope.createCalendar = function()
           {
            scope.calendarInfo.date = _removeTime(scope.calendarInfo.date || moment());
            scope.month = scope.calendarInfo.date.clone();
            var start = scope.calendarInfo.date.clone();
            start.date(1);
            _removeTime(start.day(0));
            _buildMonth(scope, start, scope.month);
           }
            scope.select = function(day) {
                scope.calendarInfo.selectedDate = day;
                //method to call the parent method
                scope.press( scope.calendarInfo.selectedDate);
              
            };

            scope.next = function() {
                var next = scope.month.clone();
                _removeTime(next.month(next.month()+1).date(1));
                scope.month.month(scope.month.month()+1);
                _buildMonth(scope, next, scope.month);
            };
           
           /*
           scope.isCustomerDate= function(day)
           {
             console.log(scope.selected.selectedDays);
               for(var i = 0 ; i < scope.selected.selectedDays.length ; i ++)
               {
               
                   return  day.date.day == scope.selected.selectedDays[i].date.day;
               }
            return false;
           }
           */

            scope.previous = function() {
                var previous = scope.month.clone();
                _removeTime(previous.month(previous.month()-1).date(1));
                scope.month.month(scope.month.month()-1);
                _buildMonth(scope, previous, scope.month);
            };
        }
    };
//***************************************************************
    function _removeTime(date) {
        return date.day(0).hour(0).minute(0).second(0).millisecond(0);
    }
//***************************************************************
    function _buildMonth(scope, start, month) {
        scope.weeks = [];
        var done = false, date = start.clone(), monthIndex = date.month(), count = 0;
        while (!done) {
            scope.weeks.push({ days: _buildWeek(date.clone(), month,scope) });
            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }
    }
//***************************************************************
    function _buildWeek(date, month,scope) {
        var days = [];
        var exd =null;
        var ed  =scope.calendarInfo.providerInformation.enabledDays;
        for (var i = 0; i < 7; i++) {
            if(scope.calendarInfo.providerInformation.exceptionDays)
            {
                exd  = scope.calendarInfo.providerInformation.exceptionDays.first(function(d){ return date.isSame(new Date(d.date)) });
            
                
            }
            days.push({
                name: date.format("dd").substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isEnabled : (ed.first(function(d){ return d.dayOfWeek == i }) != undefined ) && !exd ,
                isToday: date.isSame(new Date(), "day"),
                date: date
               
            });
            date = date.clone();
            date.add(1, "d");
            exd =null;
        }
        return days;
    }
});