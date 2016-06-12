angular.module('starter')
.controller('AppCtrl', function($scope, $ionicModal, $timeout, $rootScope, $location, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
     var ref = new Firebase("https://rinder.firebaseio.com");
    // LOG OUT BUG
    $scope.logoutUser = function(){
        ref.unauth();
        $rootScope.loader = true;
        $rootScope.notLogged = true;
        $state.go('app.login');    
    }
    
    
});
