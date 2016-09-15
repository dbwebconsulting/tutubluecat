/**
 * Created by dave on 9/14/2016.
 */
"use strict";

// Register `suitDetail` component, along with its associated controller and template
angular.
  module('suitDetail').
  component('suitDetail', {
    template: 'TBD: Detail view for <span>{{$ctrl.suitId}}</span>',
    controller: ['$routeParams',
      function SuitDetailController($routeParams) {
        this.suitId = $routeParams.suitId;
      }
    ]
  });