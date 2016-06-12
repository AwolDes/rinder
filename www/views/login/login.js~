angular.module('starter')

.controller("LoginCtrl", function($scope, $timeout, $ionicModal, $interval, $firebase, Auth, $state, $ionicSideMenuDelegate) {
    
    $scope.$on('$ionicView.enter', function(){
      $ionicSideMenuDelegate.canDragContent(false);
    });
  
    
    $scope.userEmail = {value: ""};
    $scope.userPassword = {value: ""};
    $scope.notLogged = false;
    
    
    var ref = new Firebase("https://rinder.firebaseio.com/cards");

      
    $scope.failedLogin = {value:""};
    $scope.login = function(){
        
    ref.authWithPassword({
      email    : $scope.userEmail.value,
      password : $scope.userPassword.value,
      rememberMe: true
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
           $scope.failedLogin = {value:"Invalid email or password!"};
          $scope.$apply()
      } else {
        console.log("Authenticated successfully with payload:", authData);

        $scope.notLogged = false;
            $scope.$apply()
            $state.go('app.people');
      }
    });
}
    
    $scope.goToSignup = function(){
        $state.go('app.signup');    
    };
     
})