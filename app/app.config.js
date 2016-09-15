/**
 * Created by dave on 9/14/2016.
 */
"use strict";

angular.
  module('suitcatApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/suits', {
          template: '<suit-list></suit-list>'
        }).
        when('/suits/:suitId', {
          template: '<suit-detail></suit-detail>'
        }).
        otherwise('/suits');
    }
]);