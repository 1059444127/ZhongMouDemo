"use strict";
var pageViewApp = angular.module('pageView', ['ngRoute', 'ngAnimate']);

pageViewApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/MainView/MainView.html',
            //controller: 'realTimeController'
        })
        .when('/DaPeng', {
            templateUrl: '/DaPeng/DaPeng.html',
            //controller: 'shangQingController'
        })
        .when('/ShangQing', {
            templateUrl: '/ShangQing/ShangQing.html',
            //controller: 'shangQingController'
        })
        .when('/QiXiang', {
            templateUrl: '/QiXiang/QiXiang.html',
            //controller: 'shangQingController'
        })
        .when('/ShuiJing', {
            templateUrl: '/ShuiJing/ShuiJing.html',
            //controller: 'shangQingController'
        })
        .when('/HistoryData', {
            templateUrl: '/HistoryData/HistoryData.html',
            controller: 'historyDataController'
        })
        .when('/HistoryDataDP', {
            templateUrl: '/HistoryDataDP/HistoryDataDP.html',
           // controller: 'historyDataController'
        })
        .when('/HistoryDataQX', {
            templateUrl: '/HistoryDataQX/HistoryDataQX.html',
            // controller: 'historyDataController'
        })
        .when('/HistoryDataSJ', {
            templateUrl: '/HistoryDataSJ/HistoryDataSJ.html',
            // controller: 'historyDataController'
        });


});


pageViewApp.controller('realTimeController', ['$scope', function($scope) {
    
}]);


pageViewApp.controller('historyDataController', ['$scope', function ($scope) {

}]);

