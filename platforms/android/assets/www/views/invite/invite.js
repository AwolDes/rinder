angular.module('starter')
.controller('favouritesCtrl', function($scope, $ionicModal, $timeout, $firebase, $firebaseArray, Auth) {
    
    var ref = new Firebase("https://rinder.firebaseio.com")
    
    var authInfo = ref.getAuth();

        if (authInfo) {
          console.log("Authenticated user with uid:", authInfo.uid);
            
            var user = authInfo.uid;
            
        } else{
            console.log("Not Authed"); 
            $state.go('app.signup');
        }
    
    var favouriteCards = new Firebase("https://rinder.firebaseio.com/" + user +"/cards")
    $scope.favourites = $firebaseArray(favouriteCards);
    
    $scope.openLink = function (link) {
        console.log("Clicked");
        $scope.link = link;
        window.open($scope.link, '_system', 'transitionstyle=crossdissolve,toolbarposition=top');
    };
    
})
;
