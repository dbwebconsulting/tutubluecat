"use strict";

describe('suitDetail', function () {

  // load the module that contains the `suitDetail` component before each test
  beforeEach(module('suitDetail'));

  // test the controller
  describe('SuitDetailController', function () {
    var $httpBackend, ctrl;

    beforeEach(inject(function ($componentController,
    _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;

    $httpBackend.expectGET('suits/xyz.json').respond({name: 'suit xyz'});

      $routeParams.suitId = 'xyz';

      ctrl = $componentController('suitDetail');
    }));

    it('should fetch the suit details', function () {
      expect(ctrl.suit).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.suit).toEqual({name: 'suit xyz'});
    });

  });

});