let products = [];
$.getJSON('./data/products.json', function (data) {
    products = data;
});

var app = angular.module('myApp', []);
app.controller('inputCtrl', function ($scope, $rootScope) {
    $('#filterId').keyup(function () {
        $rootScope.filterId = $(this).val();
        $scope.$apply();
    });
    $('#filterName').keyup(function () {
        $rootScope.filterName = $(this).val();
        $scope.$apply();
    });
    $('#filterPrice').keyup(function () {
        $rootScope.filterPrice = $(this).val();
        $scope.$apply();
    });
    $('#filterAmount').keyup(function () {
        $rootScope.filterAmount = $(this).val();
        $scope.$apply();
    });
});

app.controller('tableCtrl', function ($scope, $rootScope) {
    $scope.loadData = function () {
        $rootScope.products = products;
        // hide button
        $('[type="button"]').hide();
    }
});
