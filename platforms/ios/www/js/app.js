// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var mainApp = angular.module('app', ['ngIntlTelInput','ionic','ngCordova','pascalprecht.translate','ionic.rating','base64'])

.run(function($ionicPlatform,$rootScope,$ionicLoading) {
  $ionicPlatform.ready(function() {
//*******************************************************************************************
//loading show
//*******************************************************************************************  
    $rootScope.$on('loading:show', function() {
    $ionicLoading.show({template: 'Loading...'})
  })
//*******************************************************************************************
//loading hide
//*******************************************************************************************      
  $rootScope.$on('loading:hide', function() {
    $ionicLoading.hide()
  })
//*******************************************************************************************
//Globalization and language retreival
//*******************************************************************************************            
      if(typeof navigator.globalization !== "undefined") {
            navigator.globalization.getPreferredLanguage(function(language) {
            $translate.use((language.value).split("-")[0]).then(function(data) {
                console.log("SUCCESS -> " + data);
            }, function(error) {
            console.log("ERROR -> " + error);
        });
    }, null);
}
      
      
      
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function ($stateProvider,$urlRouterProvider,$translateProvider,$httpProvider) {
    
//*******************************************************************************************
//Interceptor for request and response
//*******************************************************************************************  
  $httpProvider.interceptors.push('AuthInterceptor');

//*******************************************************************************************
//Controllers
//*******************************************************************************************  
   $stateProvider
 //abstract main customer tab
.state('tabs', {
      url: "/tabs",
      abstract: true,
      templateUrl: "views/tabs.html"
    })
//abstract main provider tab   
.state('tabsprovider', {
      url: "/tabsprovider",
      abstract: true,
      templateUrl: "views/tabsprovider.html"
    })
//login tab   
.state('login', {
    url: '/login',
    controller :'LoginController',
    templateUrl: 'views/login.html'
  })
//create User tab   
.state('createUser', {
    url: '/createUser',
    controller :'CreateUserController',
    templateUrl: 'views/createUser.html'
  })
//create Provider tab   
.state('tabs.createprovider', {
    url: '/createProvider',
       views:{
           'services-tab' :
           {
           
    controller :'CreateProviderController',
    templateUrl: 'views/createProvider.html'
       }
   }
  })
   //Provider map tab   
.state('tabs.providermap', {
    url: '/providerMap',
    params: {
        provider: null
        },   
       views:{
           'services-tab' :
           {
           
    controller :'ProviderMapController',
    templateUrl: 'views/providerMap.html'
       }
   }
  })
      //Provider map tab   
.state('tabs.providersettings', {
    url: '/providerSettings',
    params: {
        provider: null
        },   
       views:{
           'services-tab' :
           {
           
    controller :'ProviderSettingsController',
    templateUrl: 'views/providerSettings.html'
       }
   }
  })
.state('tabs.providersetttingsservicecategory', {
    url: '/providerSettingsServiceCategory',
       views:{
           'services-tab' :
           {
           
    controller :'ProviderSettingsServiceCategoryController',
    templateUrl: 'views/providerSettingsServiceCategory.html'
       }
   }
  })
   .state('tabs.providersettingsservicelist', {
    url: '/providerSettingsServicelist/:serviceListId',
      
    views:{
   'services-tab' :
   {
    controller :'ProviderSettingsServiceListController',
    templateUrl: 'views/providerSettingsServiceList.html',
    resolve: {
      serviceListId: function($stateParams) {
        return $stateParams.serviceListId;
      }}   
       
   }
        }
   
  })
.state('tabs.providersettingsschedule', {
    url: '/providerSettingsSchedule',
       views:{
           'services-tab' :
           {
           
    controller :'ProviderSettingsScheduleController',
    templateUrl: 'views/providerSettingsSchedule.html'
       }
   }
  })
   .state('tabs.providersettingsscheduledetail', {
    url: '/providerSettingsScheduleDetail',
    params: {
        scheduleDay: null
        },
       views:{
           'services-tab' :
           {
           
    controller :'ProviderSettingsScheduleDetailController',
    templateUrl: 'views/providerSettingsScheduleDetail.html'
       }
   }
  })
.state('tabs.providersettingsscheduleexception', {
    url: '/providerSettingsScheduleException',
       views:{
           'services-tab' :
           {
           
    controller :'ProviderSettingsScheduleExceptionController',
    templateUrl: 'views/providerSettingsScheduleException.html'
       }
   }
  })   
.state('review', {
    url: '/review',
    controller :'ReviewController',
    templateUrl: 'views/review.html'
  })
.state('chooseProfile', {
    url: '/chooseProfile',
    controller :'ChooseProfileController',
    templateUrl: 'views/chooseProfile.html'
  })
  .state('tabs.home', {
    url: '/home',
   controller :'HomeController',
    templateUrl: 'views/home.html'
  })
.state('tabs.fleekservicecategory', {
    url: '/fleekservicecategory',
       views:{
           'services-tab' :
           {
           
    controller :'FleekServiceCategoryController',
    templateUrl: 'views/fleekServiceCategory.html'
       }
   }
  })
   .state('tabs.fleekservicelist', {
    url: '/fleekservicelist/:serviceListId',
      
    views:{
   'services-tab' :
   {
    controller :'FleekServiceListController',
    templateUrl: 'views/fleekServiceList.html',
    resolve: {
      serviceListId: function($stateParams) {
        return $stateParams.serviceListId;
      }}   
       
   }
        }
   
  })
   .state('tabs.providerreservation', {
      url: "/providerreservation",
      views: {
        'providerreservation-tab': {
               controller :'ProviderReservationController',
          templateUrl: "views/providerreservation.html"
        }
      }
    })
     .state('tabs.providerreservationinformation', {
      url: "/providerreservationinformation",
      views: {
        'providerreservation-tab': {
               controller :'ProviderReservationInformationController',
          templateUrl: "views/providerreservationinformation.html"
        }
      }
    })
.state('tabs.calendar', {
    url: '/calendar',
        views:{
           'services-tab' :
           {
    controller :'CalendarController',
    templateUrl: 'views/calendar.html'
           }
        }
  })
.state('tabs.selectprovider', {
    url: '/selectprovider',
        views:{
           'services-tab' :
           {
    controller :'SelectProviderController',
    templateUrl: 'views/selectprovider.html'
           }
        }
  }) .state('tabs.searchmap', {
    url: '/searchmap',
        views:{
           'services-tab' :
           {
     controller :'SearchMapController',
    templateUrl: 'views/searchmap.html'
           }
        }
  })  
   .state('tabs.provider', {
    url: '/provider',
        views:{
           'services-tab' :
           {
     controller :'ProviderController',
    templateUrl: 'views/provider.html'
           }
        }
  }) 
    .state('tabs.providerwork', {
    url: '/providerwork',
        views:{
           'services-tab' :
           {
     controller :'ProviderWorkController',
    templateUrl: 'views/providerwork.html'
           }
        }
  }) 
    .state('tabs.providerrecommendation', {
    url: '/providerrecommendation',
        views:{
           'services-tab' :
           {
    controller :'ProviderRecommendationController',
    templateUrl: 'views/providerrecommendation.html'
           }
        }
  })
    .state('tabs.providerinformation', {
    url: '/providerinformation',
        views:{
           'services-tab' :
           {
    controller :'ProviderInformationController',
    templateUrl: 'views/providerinformation.html'
           }
        }
  }) 
   .state('tabs.providerselection', {
    url: '/providerselection',
        views:{
           'services-tab' :
           {
    controller :'ProviderSelectionController',
    templateUrl: 'views/providerselection.html'
           }
        }
  })
.state('tabs.profile', {
    url: '/profile',
        views:{
           'profile-tab' :
           {
  
    templateUrl: 'views/profile.html'
           }
        }
  })
.state('tabsprovider.profile', {
    url: '/profile',
        views:{
           'profile-tab' :
           {
  
    templateUrl: 'views/profile.html'
           }
        }
  })
.state('tabsprovider.providerservicecreation', {
    url: '/providerservicecreation',
        views:{
           'services-tab' :
           {
  controller :'ProviderServiceCreationController',
    templateUrl: 'views/providerservicecreation.html'
           }
        }
  })   
   
   ;
    
  $urlRouterProvider.otherwise('/login')
    //configuration setting for the language
  $translateProvider.useStaticFilesLoader({
    prefix: 'js/translations/translations-',
    suffix: '.json'
});
 $translateProvider.preferredLanguage("es");
        $translateProvider.fallbackLanguage("en");
});
