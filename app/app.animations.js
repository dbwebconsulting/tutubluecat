/**
 * Created by dave on 9/23/2016.
 */
"use strict";

angular.
  module('suitcatApp').
  animation('.suit', function suitAnimationFactory() {
    return {
      addClass: animateIn,
      removeClass: animateOut
    };

    function animateIn(element, className, done) {
      if (className !== 'selected') return;

      element.css({
        display: 'block',
        position: 'absolute',
        right: -500,
        bottom: 0
      }).animate({
        right: -43
      }, done);

      return function animateInEnd(wasCanceled) {
        if (wasCanceled) element.stop();
      };
    }

    function animateOut(element, className, done) {
      if (className !== 'selected') return;

      element.css({
        position: 'absolute',
        right: 0,
        bottom: 0
      }).animate({
        right: 500
      }, done);

      return function animateOutEnd(wasCanceled) {
        if (wasCanceled) element.stop();
      };
    }
});