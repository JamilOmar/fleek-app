mainApp.factory('LocalStorage', ['$window', function($window) {
//*******************************************************************************************
//set value on local storage
//*******************************************************************************************  
    function set(key, value) {
      $window.localStorage[key] = value;
    }
//*******************************************************************************************
//get value from local storage
//*******************************************************************************************      
    function get(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    }
//*******************************************************************************************
//set object in local storage
//*******************************************************************************************      
    function setObject(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    }
//*******************************************************************************************
//set object in local storage
//*******************************************************************************************      
    function getObject(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
    
    return {
    set: set,
    get: get,
    setObject: setObject,
    getObject: getObject
  }
}]);