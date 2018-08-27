app.component('navbar', {
    templateUrl: 'client/shared/navbar/navbar.html',
    controller: function ($scope) {
      $scope.clickme = function () {
        console.log("clicked")
        alert("Hey Nadine")
      }
    }
  })