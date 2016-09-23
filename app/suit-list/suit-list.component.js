/**
 * Created by dave on 9/7/2016.
 */
"use strict";

// register `suitList` component along with its associated controller and template
angular.
  module('suitList').
  component('suitList', {
    templateUrl: 'suit-list/suit-list.template.html',
    controller: ['Suit',
      function SuitListController(Suit) {
        this.suits = Suit.query();
        this.orderProp = 'age';
      }
    ]
  });