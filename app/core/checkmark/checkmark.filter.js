/**
 * Created by dave on 9/18/2016.
 */
"use strict";

angular.
module('core').
filter('checkmark', function () {
  return function (input) {
    return input ? '\u2713' : '\u2718';
  };
});