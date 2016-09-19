/**
 * Created by dave on 9/14/2016.
 */
"use strict";

// Register `suitDetail` component, along with its associated controller and template
angular.
  module('suitDetail').
  component('suitDetail', {
    templateUrl: 'suit-detail/suit-detail.template.html',
    controller: ['$http', '$routeParams', '$scope',
      function SuitDetailController($http, $routeParams, $scope) {
        var self = this;

        $http.get('suits/' + $routeParams.suitId + '.json').
        then(function(response) {
          self.suit = response.data;

        $scope.mydate = new Date();
        var numberOfDaysToAdd = 3;
        $scope.shipdate = $scope.mydate.setDate($scope.mydate.getDate() + numberOfDaysToAdd);
        });
      }
    ]
  });