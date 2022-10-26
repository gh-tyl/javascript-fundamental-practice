// let users = []
// let loggedUser = {}
// var lastName = data.lastName;
// var fullName = firstName + ' ' + lastName;
// var email = data.email;
// var password = data.password;
// var telephone = data.telephone;
// var address = data.address;
// var dob = data.dob;
// var ed = data.ed;
// var departmentId = data.departmentId;
// var positionId = data.positionId;

// $.getJSON('./data/user_info.json', function (data) {
//     users = data;
//     $($('button')[0]).click(function () {
//         let email = $('#email').val();
//         let password = $('#password').val();
//         loggedUser = {}
//         // $.each(users, function (index, user) {
//         //     if (user.email == email && user.password == password) {
//         //         loggedUser = user;
//         //         return false;
//         //     }
//         // });
//         // console.log(loggedUser);
//         loggedUser = users.find(function (user) {
//             return user.email == email && user.password == password;
//         });
//         if (loggedUser) {
//             console.log(loggedUser);
//             $($('h1')[0]).text('Welcome ' + loggedUser.firstName);
//             $($('h1')[0]).show();
//         } else {
//             console.log('Invalid email or password');
//             $($('h1')[0]).text('Invalid email or password');
//         }
//     });
// });

// using angularjs

let users = []
$.getJSON('./data/user_info.json', function (data) {
    users = data;
});
var app = angular.module('loginApp', []);
app.controller('userCtrl', function ($scope) {
    $scope.email = 'bgniewosz1@gmpg.org';
    $scope.password = 'Ei4B8bYIlwlz';
    $scope.output = '';
    $scope.login = function () {
        $scope.loggedUser = users.find(function (user) {
            return user.email == $scope.email && user.password == $scope.password;
        });
        if ($scope.loggedUser) {
            $scope.output = 'Welcome ' + $scope.loggedUser.firstName + ' ' + $scope.loggedUser.lastName;
            $scope.users = users;
            $scope.email = '';
            $scope.password = '';
            // hide login form
            $('.loginForm').hide();
        } else {
            console.log('Invalid email or password');
            $scope.output = 'Invalid email or password';
        }
    }
});

app.controller('listCtrl', function ($scope) {
    $scope.fname = '';
    $scope.lname = '';

    $("#filter").keyup(function () {
        lowerCaseFilter = $(this).val().toLowerCase();
        // filter by first name
        $scope.users = users.filter(function (user) {
            return user.firstName.toLowerCase().indexOf(lowerCaseFilter) > -1;
        });
        // $scope.$apply();
        $scope.$apply($scope.users);
    });
});

app.controller('tableScope', function ($scope, $rootScope) {
    $scope.users = users;
});
