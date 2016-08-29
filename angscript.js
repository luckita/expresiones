///algo aca no le gusta...
/* global angular */
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'index.html',
        })

        .when('/palabras', {
            templateUrl : 'palabras.html',
        })

        .when('/expresiones', {
            templateUrl : 'expresiones.html',
        })
    
        .when('/grafos', {
            templateUrl : 'cyto.html',
        })

        .when('/about',{
            templateUrl : 'about.html',
        });
});