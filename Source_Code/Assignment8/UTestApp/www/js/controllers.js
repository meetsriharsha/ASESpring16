angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $state, $http) {
  $scope.doLogin = function(sso, password) {
    //console.log('Doing login', $scope.loginData);
      $scope.stat = 0;
    // $scope.data = {};
    //var count=0;
    //var remcount=3;
    $scope.username = sso;
    $scope.pwd = password;
     //var flag=1;
    $scope.pageClass = 'tab.home';
    $scope.home = function() {
      console.log("home page !");
      $state.go('tab.home');
    }
    $scope.pageClass = 'tab.dash';
    // $scope.login = function(username, password) {
    //console.log("inside login function");
    //inside.getMethod();
    $http({
      method: 'GET',
      url: 'https://api.mongolab.com/api/1/databases/studentcompaniondb/collections/Login?apiKey=PPjxva2p9SH3NomyxSQ6rdwiofOu1q2L',
      contentType: "application/json"
    }).then(function (response) {
        var data = response.data;
      var list = data;
        $scope.stat = response.status;
        console.log($scope.stat);


      for (var i = 0; i < list.length; i++) {
        if (angular.equals(list[i].SSO, sso) && angular.equals(list[i].Password, password)) {

          localStorage.setItem("username", list[i].SSO);
          localStorage.setItem("password", list[i].Password);
          console.log("inside if loop");
          //flag = 0;
          $state.go('tab.home');
            break;

        } else {
          //alert("Incorrect username/password");
          console.log("inside else loop");
            document.getElementById('msg').innerHTML = "<p><h3>Invalid Credentials! Please try again....</h3></p>";
            $state.go('tab.dash');
          //count++;
        }
      }

      //if (count == list.length) {
        // alert("hiii");
        /*  remcount--;
         alert("Attempts remaining  "+remcount);
         if(remcount==0){
         alert("Please try again");
         $window.close();

         ionic.Platform.exitApp();
         }*/
      //  $state.go('login');
      //  document.getElementById('x').innerHTML = "<p><h3>Invalid Credentials! Please try again....</h3></p>";
      //}
    })

    //  }
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    //$timeout(function() {
    //  $state.go('app.search');
    //}, 1000);

          return $scope.stat;
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

    .controller('HomeCtrl', function($scope, $state) {
        $scope.welcome = "Welcome to Your Personal Page";
        $scope.logout = function() {
            $state.go('tab.dash');
        };
    })
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };

});
