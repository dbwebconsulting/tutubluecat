/**
 * Created by dave on 9/22/2016.
 */
"use strict";

angular.
  module('core.suit').
  factory('Suit', ['$resource',
    function ($resource) {
      return $resource('suits/:suitId.json', {}, {
        query: {
          method: 'GET',
          params: {suitId: 'suits'},
          isArray: true
        }
      });
    }
  ]);