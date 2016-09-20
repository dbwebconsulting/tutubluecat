/**
 * Created by dave on 9/7/2016.
 */
"use strict";

describe('SuitCat Application', function () {

  it('should redirect `index.html` to `index.html#!/suits', function () {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toBe('/suits');
  });

  describe('View: Suit list', function () {

    beforeEach(function () {
      browser.get('index.html#!/suits');
    });

    it('should filter the suit list as user types into the search box', function () {
      var suitList = element.all(by.repeater('suit in $ctrl.suits'));
      var query = element(by.model('$ctrl.query'));

      expect(suitList.count()).toBe(20);

      query.sendKeys('Short Beach suit');
      expect(suitList.count()).toBe(5);

      query.clear();
      query.sendKeys('Sunshine');
      expect(suitList.count()).toBe(2);
    });

    it('should be possible to control suit order via drop-down menu', function () {
      var queryField  = element(by.model('$ctrl.query'));
      var orderSelect = element(by.model('$ctrl.orderProp'));
      var nameOption = orderSelect.element(by.css('option[value="name"]'));
      var suitNameColumn = element.all(by.repeater('suit in $ctrl.suits').column('suit.name'));

      function getNames() {
        return suitNameColumn.map(function (elem) {
          return elem.getText();
        });
      }

      queryField.sendKeys('Short Beach suit');  //Let's narrow the data set to make the assertions shorter

      expect(getNames()).toEqual([
        'Sunshine Short Beach Suit',
        'Kaleidoscope Short Beach Suit',
        'Freedom Short Beach Suit',
        'Black Cat Short Beach Suit',
        'Aqualung Short Beach Suit'
      ]);

      nameOption.click();

      expect(getNames()).toEqual([
        'Aqualung Short Beach Suit',
        'Black Cat Short Beach Suit',
        'Freedom Short Beach Suit',
        'Kaleidoscope Short Beach Suit',
        'Sunshine Short Beach Suit'
      ]);
    });

    it('should render suit specific links', function () {
      var query = element(by.model('$ctrl.query'));
      query.sendKeys('Sunshine');

      element.all(by.css('.suits li a')).first().click();
      expect(browser.getLocationAbsUrl()).toBe('/suits/sunshine-long-beach-suit');
    });

  });

  describe('View: Suit detail', function () {

    beforeEach(function () {
      browser.get('index.html#!/suits/sunshine-long-beach-suit');
    });

    it('should display the `sunshine-long-beach-suit` page', function () {

      expect(element(by.binding('$ctrl.suit.name')).getText()).toBe('Sunshine Long Beach Suit');
    });

    it('should display thumbnail images', function () {
      var imgCount = element.all(by.css('.suit-thumbs img'));
      expect(imgCount.count()).toBe(7);
    });

    it('should display the first suit image as the main suit image', function () {
      var mainImage = element(by.css('img.suit'));

      expect(mainImage.getAttribute('src')).toMatch(/img\/suits\/sunshine-long-beach-suit.0.jpg/);
    });

    it('should swap the main image when clicking on a thumbnail image', function () {
      var mainImage = element(by.css('img.suit'));
      var thumbnails = element.all(by.css('.suit-thumbs img'));

      thumbnails.get(2).click();
      expect(mainImage.getAttribute('src')).toMatch(/img\/suits\/sunshine-long-beach-suit.2.jpg/);

      thumbnails.get(0).click();
      expect(mainImage.getAttribute('src')).toMatch(/img\/suits\/sunshine-long-beach-suit.0.jpg/);
    });

  });

});