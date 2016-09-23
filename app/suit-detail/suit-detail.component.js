/**
 * Created by dave on 9/14/2016.
 */
"use strict";

// Register `suitDetail` component, along with its associated controller and template
angular.
  module('suitDetail').
  component('suitDetail', {
    templateUrl: 'suit-detail/suit-detail.template.html',
    controller: ['$routeParams', 'Suit', '$scope',
      function  SuitDetailController($routeParams, Suit, $scope) {
        var self = this;
        self.suit = Suit.get({suitId: $routeParams.suitId}, function (suit) {
          self.setImage(suit.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };

        self.onMouseover = function onMouseover(imageUrl) {
          self.message = 'Click thumbnail to display larger image.'
        };

        $scope.mydate = new Date();
        var numberOfDaysToAdd = 3;
        $scope.shipdate = $scope.mydate.setDate($scope.mydate.getDate() + numberOfDaysToAdd);
      }
    ]
  });