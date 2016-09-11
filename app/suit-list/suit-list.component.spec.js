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

    /* The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
     * This allows us to inject a service and assign it to a variable with the same name
     * as the service while avoiding a name conflict.
    */
    beforeEach(inject(function ($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('suits/suits.json')
                  .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      ctrl = $componentController('suitList');
    }));

    it('should create a `suits` property with 2 suits fetched with `$http`', function() {
      expect(ctrl.suits).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.suits).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });

    it('should set a default value for the `orderProp` property', function () {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});