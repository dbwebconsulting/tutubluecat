/**
 * Created by dave on 9/6/2016.
 */
"use strict";

describe('suitList', function() {

  // Load the module that contains the `suitList` component before each test
  beforeEach(module('suitList'));

  // Test the controller
  describe('SuitListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function ($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('suits/suits.json')
                  .respond([{name: 'Sunshine Long Beach Suit'}, {name: 'Kaleidoscope Short Beach Suit'}]);

      ctrl = $componentController('suitList');
    }));

    it('should create a `suits` property with 2 suits fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.suits).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.suits).toEqual([{name: 'Sunshine Long Beach Suit'}, {name: 'Kaleidoscope Short Beach Suit'}]);
    });

    it('should set a default value for the `orderProp` property', function () {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});