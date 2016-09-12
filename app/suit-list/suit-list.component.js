/**
 * Created by dave on 9/7/2016.
 */
"use strict";

// register `suitList` component along with its associated controller and template
angular.
  module('suitList').
  component('suitList', {
    templateUrl: 'suit-list/suit-list.template.html',
    controller: ['$http',
      function PhoneListController($http) {
        var self = this;
        self.orderProp = 'age';


        $http.get('suits/suits.json').then(function (response) {
          self.suits = response.data;
          //self.suits = response.data.slice(0, 5);  limit result set
        });
      }
    ]
  });