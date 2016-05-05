mainApp.factory('AuthInterceptor', function($rootScope,$q,LocalStorage,Constants) {
//*******************************************************************************************
//Interceptor for request and response
//*******************************************************************************************  
function request(config) {
    $rootScope.$broadcast('loading:show')
    if(config.url !=undefined )
    {
        var strongRegex = new RegExp(/^((?!authenticationService).)*$/);
        
     
        if(strongRegex.test(config.url))
        {
            config.headers.Authorization = "Bearer "+ LocalStorage.get(Constants.TOKEN);
            
            return config;
        }
    }
    return config;
}
function response(response) {
    $rootScope.$broadcast('loading:hide');
    return response;
}
function responseError (err) {
      $rootScope.$broadcast('loading:hide');
      return $q.reject(err);
}    
    return {
    request: request,
    response:response,
    responseError:responseError
  };
});