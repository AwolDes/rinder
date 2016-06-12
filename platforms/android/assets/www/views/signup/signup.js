angular.module('starter')

.controller("SignupCtrl", function($scope, $timeout, $ionicModal, $interval, $firebase, Auth, $state, $rootScope, $ionicSideMenuDelegate) {
    
    $scope.$on('$ionicView.enter', function(){
      $ionicSideMenuDelegate.canDragContent(false);
    });
  
    
    
    $rootScope.notLogged = false;
    $scope.userEmail = {value: ""};
    $scope.userPassword = {value: ""};
    
    $scope.notLogged = $rootScope.notLogged;
    
    var ref = new Firebase("https://rinder.firebaseio.com");

    var authInfo = ref.getAuth();

        if (authInfo) {
          console.log("Authenticated user with uid:", authInfo.uid);
            $state.go('app.people');
        } else{
            console.log("Not Authed"); 
            $state.go('app.signup');
        }
    $scope.failedLogin = {value:""};
    
    $scope.signup = function(){
        
        ref.createUser({
          email    : $scope.userEmail.value,
          password : $scope.userPassword.value
        }, function(error, userData) {
          if (error) {
              $scope.failedLogin = {value:"Invalid email or no password"};
              $scope.$apply()
            console.log("Error creating user:", error);
          } else {
              $rootScope.loader = false;
    $rootScope.notLogged = true;
              $scope.notLogged = $rootScope.notLogged;
              $scope.loader = $rootScope.loader;
              $scope.$apply()
            console.log("Successfully created user account with uid:", userData.uid);
              //Log new user in to fix auth
              
              ref.authWithPassword({
                  email    : $scope.userEmail.value,
                  password : $scope.userPassword.value,
                  rememberMe: true
                }, function(error, authData) {
                  if (error) {
                    console.log("Login Failed!", error);
                  } else {
                    console.log("Authenticated successfully with payload:", authData);
                };
                })
    
            $state.go('app.people');
          }
        }
        )}
        
        

    $scope.goToLogin = function(){
        console.log("CLICKED");
        $state.go('app.login');    
    };

})