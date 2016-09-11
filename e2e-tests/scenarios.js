/**
 * Created by dave on 9/7/2016.
 */
"use strict";

describe('SuitCat Application', function () {

  describe('suitList', function () {

    beforeEach(function () {
      browser.get('index.html');
    });

    it('should filter the phone list as user types into the search box', function () {
      var suitList = element.all(by.repeater('suit in $ctrl.suits'));
      var query = element(by.model('$ctrl.query'));

      expect(suitList.count()).toBe(20);

      query.sendKeys('Short Beach suit');
      expect(suitList.count()).toBe(5);

      query.clear();
      query.sendKeys('Aqualung');
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
    });/**/

  });

});