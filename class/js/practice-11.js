var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    const student = function (fname, lname, grade, password) {
        this.fname = fname;
        this.lname = lname;
        this.grade = grade;
        this.password = password;
    }

    $scope.students = [];
    console.log($scope.students);
    $scope.addStudent = function () {
        if ($scope.fname && $scope.lname && ($scope.grade || $scope.grade === 0) && $scope.password) {
            $scope.students.push(new student($scope.fname, $scope.lname, $scope.grade, $scope.password));
            $scope.maxGrade();
            $scope.minGrade();
            $scope.averageGrade();
            $scope.fname = "";
            $scope.lname = "";
            $scope.grade = "";
        }
    }
    // maximum
    $scope.max = 0;
    $scope.maxGrade = function () {
        var max = $scope.students[0].grade;
        for (var i = 0; i < $scope.students.length; i++) {
            if ($scope.students[i].grade > max) {
                max = $scope.students[i].grade;
            }
        }
        $scope.max = max;
    }
    // minimum
    $scope.min = 0;
    $scope.minGrade = function () {
        var min = $scope.students[0].grade;
        for (var i = 0; i < $scope.students.length; i++) {
            if ($scope.students[i].grade < min) {
                min = $scope.students[i].grade;
            }
        }
        $scope.min = min;
    }
    // average
    $scope.average = 0;
    $scope.averageGrade = function () {
        var sum = 0;
        for (var i = 0; i < $scope.students.length; i++) {
            sum += $scope.students[i].grade;
        }
        $scope.average = sum / $scope.students.length;
    }
    // show password
    $scope.show = "password";
    $scope.showPassword = function () {
        console.log($scope.show);
        if ($scope.show === "password") {
            $scope.show = "text";
        } else {
            $scope.show = "password";
        }
    }
    $scope.color = ".color";
    console.log($scope.color)
});
