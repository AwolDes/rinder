angular.module('starter')
.controller('CardsCtrl', function ($scope, $http, $ionicLoading, $ionicSideMenuDelegate, TDCardDelegate, $firebase, $firebaseArray, Auth) {
    console.log('CARDS CTRL');
  
    
    var ref = new Firebase("https://rinder.firebaseio.com");
    
     var authInfo = ref.getAuth();

        if (authInfo) {
          console.log("Authenticated user with uid:", authInfo.uid);
            
            var user = authInfo.uid;
            
        } else{
            console.log("Not Authed"); 
            $state.go('app.signup');
        }
    
     var recipeRef = new Firebase("https://rinder.firebaseio.com/" + user);
    
    $ionicSideMenuDelegate.canDragContent(false);
    var cardTypes = [];
    //$ionicLoading.show();
    
    function jsonp_callback(data) {
    // returning from async callbacks is (generally) meaningless
    console.log(data.found);
}
    
    
    function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

    
    var url= "http://food2fork.com/api/search?key=4c1ef71c6487ad8d59c1e97312fa906e&q=shredded%20chicken" + "?callback=JSON_CALLBACK";
//$http.get(url)
        
    var foods = ['mexican', 'steak', 'italian', 'pizza', 'asian', 'curry', 'indian', 'burgers', 'vegetarian', 'salad', 'pasta', 'pasteries', 'japanese', 'bbq', 'lamb', 'roast', 'chinese', 'pork', 'ribs', 'fish', 'seafood', 'pasteries', 'dessert', 'cake', 'pie', 'meat'];
    
    $scope.moreBtn = false;
    
    var firstSearch = foods[Math.floor(Math.random()*foods.length)];
    
$http.get("http://food2fork.com/api/search?key=4c1ef71c6487ad8d59c1e97312fa906e&q="+firstSearch/*)'https://cors-test.appspot.com/test'*//*'https://randomuser.me/api/?results=30')*/).success(function (data) {
    console.log(data);
    data = shuffleArray(data);
      angular.forEach(data.recipes, function (famous) {
        
        if (cardTypes.length <= 15){
            cardTypes.push(famous);
        }
        
        //  console.log(famous);
        //console.log(JSON.stringify(famous));
      });
      $ionicLoading.hide();
    }).error(function (err) {
      console.log(err);
    });

  
  $scope.cards = cardTypes;
    
    console.log($scope.cards);
    
  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
      console.log($scope.cards.length);
      if ($scope.cards.length == 0){
          //$scope.moreBtn = true;
          $scope.newCards();
      }
  };
    
    /*$scope.addCard = function(img, name){
        var newCard=({image:img, title:name});
        newCard.id = Math.random();
        $scope.cards.push(angular.extend({}, newCard));
    }*/

  $scope.addCard = function(count) {
    var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  }
  
  
  
  
  $scope.newCards = function(){
      $ionicLoading.show();
      var newSearch = foods[Math.floor(Math.random()*foods.length)];
      $http.get("http://food2fork.com/api/search?key=4c1ef71c6487ad8d59c1e97312fa906e&q="+newSearch)
/*'https://randomuser.me/api/?results=30')*/.success(function (data) {
    console.log(data);
    data = shuffleArray(data);
    console.log(data);
      angular.forEach(data.recipes, function (famous) {
        
        if (cardTypes.length <= 15){
            cardTypes.push(famous);
        }
        
        //  console.log(famous);
        //console.log(JSON.stringify(famous));
      });
      $ionicLoading.hide();
    }).error(function (err) {
      console.log(err);
    });
  }
   

  $scope.yesCard = function(index) {
    console.log('YES');
    //$scope.addCard();
      console.log($scope.cards[index]);
        var card = $scope.cards[index];
          var favouriteCards = new Firebase("https://rinder.firebaseio.com/" + user + "/cards") //new Firebase("https://rinder.firebaseio.com/users/"+$scope.itemOwner.value+"/items");
          $scope.favouriteCards = $firebaseArray(favouriteCards);

          $scope.favouriteCards.$add({
              title:card.title,
              url:card.source_url,
              image:card.image_url
          })
          
          $scope.cardDestroyed(index);
  };

  $scope.noCard = function(index) {
    console.log('NO');
    //$scope.saveCard();
      $scope.cardDestroyed(index);
  };
  $scope.toggleLeft = function() {
  $ionicSideMenuDelegate.toggleLeft();
  };
    
    $scope.cardSwipedLeft = function() {
    console.log('LEFT SWIPE');
    //$scope.addCard();
  };
  $scope.cardSwipedRight = function(index) {
    console.log('RIGHT SWIPE');
    
  };
    
    $scope.transitionRight = function(index) {
  console.log('card removed to the right');
        //$scope.addCard();
        console.log($scope.cards[index]);
        var card = $scope.cards[index];
          var favouriteCards = new Firebase("https://rinder.firebaseio.com/" + user + "/cards") //new Firebase("https://rinder.firebaseio.com/users/"+$scope.itemOwner.value+"/items");
          $scope.favouriteCards = $firebaseArray(favouriteCards);

          $scope.favouriteCards.$add({
              title:card.title,
              url:card.source_url,
              image:card.image_url
          })
      
 
    };
$scope.transitionLeft = function(card) {
  console.log('card removed to the left');
  console.log(card);
};
    
    
})

