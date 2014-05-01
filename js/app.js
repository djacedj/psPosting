'use strict';

/* App Module */

var psPostingApp = angular.module('psPostingApp', ['ngRoute', 'psPostingControllers', 'psPostingServices']);

psPostingApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'template/main.html',
                controller: 'MainCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
