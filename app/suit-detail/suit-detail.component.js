/**
 * Created by dave on 9/14/2016.
 */
"use strict";

// Register `suitDetail` component, along with its associated controller and template
angular.
  module('suitDetail').
  component('suitDetail', {
    templateUrl: 'suit-detail/suit-detail.template.html',
    controller: ['$http', '$routeParams',
      function SuitDetailController($http, $routeParams) {
        var self = this;

        $http.get('suits/' + $routeParams.suitId + '.json').
        then(function(response) {
          self.suit = response.data;
        });
      }
    ]
  });