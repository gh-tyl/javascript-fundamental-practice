var app = angular.module('myApp', []);
app.controller('calCtrl', function ($scope) {
    $scope.firstNum = 0;
    $scope.secondNum = 0;
    $scope.names = ["Emil", "Tobias", "Linus"];
});

app.controller('listCtrl', function ($scope) {
    $scope.names = ["Emil", "Tobias", "Linus"];
    $scope.singers = ["Arijit Singh", "Atif Aslam", "Sonu Nigam", "Shreya Ghoshal", "A.R. Rahman"];
});

app.controller('tableCtrl', function ($scope) {
    $scope.students = [
        { fname: "Emil", lname: "Ogata", grade: 10 },
        { fname: "Tobias", lname: "Ogata", grade: 10 },
        { fname: "Linus", lname: "Ogata", grade: 10 }
    ];
});

app.controller('addNameCtrl', function ($scope) {
    $scope.names = ["Emil", "Tobias", "Linus"];
    console.log($scope.names);
    $scope.addName = function () {
        console.log("$scope.names");
        console.log($scope.names);
        $scope.names.push($scope.newName);
        $scope.newName = "";
    }
});
