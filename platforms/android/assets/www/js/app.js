// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic.contrib.ui.tinderCards', 'firebase'])

.factory("Auth", ["$firebaseAuth",     
    function($firebaseAuth) {
        var ref = new Firebase("https://rinder.firebaseio.com");
            return $firebaseAuth(ref);
}])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
      
    // MUST BE ON APP STORE FIRST
    var admobid = {};
        // select the right Ad Id according to platform
        if( /(android)/i.test(navigator.userAgent) ) { 
            admobid = { // for Android
                banner: 'ca-app-pub-2891684568250457/1154967720',
                interstitial: 'ca-app-pub-2891684568250457/4108434120'
            };
        } /*else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
            admobid = { // for iOS
                banner: 'ca-app-pub-6869992474017983/4806197152',
                interstitial: 'ca-app-pub-6869992474017983/7563979554'
            };
        } else {
            admobid = { // for Windows Phone
                banner: 'ca-app-pub-6869992474017983/8878394753',
                interstitial: 'ca-app-pub-6869992474017983/1355127956'
            };
        }*/
 
  if(window.AdMob) AdMob.createBanner( {
      adId:admobid.banner, 
      position:AdMob.AD_POSITION.BOTTOM_CENTER, 
      autoShow:true} );  
      
      
      
  });
})

.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', function($httpProvider, $stateProvider, $urlRouterProvider) {
    
    $httpProvider.defaults.useXDomain = true;
$httpProvider.defaults.withCredentials = true;
delete $httpProvider.defaults.headers.common["X-Requested-With"];
$httpProvider.defaults.headers.common["Accept"] = "application/json";
$httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.people', {
      url: '/people',
      views: {
        'menuContent': {
          templateUrl: 'views/people/people.html',
          controller: 'profileCtrl'
        }
      }
    })
  .state('app.settings', {
        url: '/settings',
        views: {
          'menuContent': {
            templateUrl: 'views/settings/settings.html',
            controller: 'settingsCtrl'
          }
        }
      })
  
 
  .state('app.invite', {
            url: '/invite',
            views: {
              'menuContent': {
                templateUrl: 'views/invite/invite.html',
                controller: 'favouritesCtrl'
              }
            }
  })
  
  .state('app.signup', {
            url: '/signup',
            views: {
              'menuContent': {
                templateUrl: 'views/signup/signup.html',
                controller: 'SignupCtrl'
              }
            }
  })
  
  .state('app.login', {
            url: '/login',
            views: {
              'menuContent': {
                templateUrl: 'views/login/login.html',
                controller: 'LoginCtrl'
              }
            }
  })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/signup');
}])
.directive('noScroll', function($document) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  }
})
;
