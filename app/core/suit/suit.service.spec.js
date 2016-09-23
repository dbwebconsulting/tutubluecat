/**
 * Created by dave on 9/22/2016.
 */
"use strict";

describe('Suit', function () {
  var $httpBackend;
  var Suit;
  var suitsData = [
    {name: 'Suit X'},
    {name: 'Suit Y'},
    {name: 'Suit Z'}
  ];

  // add a custom equality tester before each test
  beforeEach(function () {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // load the module that contains the `Suit` service before each test
  beforeEach(module('core.suit'));

  // instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function (_$httpBackend_, _Suit_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('suits/suits.json').respond(suitsData);

    Suit = _Suit_;
  }));

  // verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the suits data from `/suits/suits.json`', function () {
    var suits = Suit.query();

    expect(suits).toEqual([]);

    $httpBackend.flush();
    expect(suits).toEqual(suitsData);
  });

});