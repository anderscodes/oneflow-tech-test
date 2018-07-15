var model = require('../expressapi/model/model.js')

var chai = require('chai');
var expect = chai.expect;
var siliconValley = require('../expressapi/silicon-valley.json')

  describe('model', function () {

    it('returns episodes', function () {

          expect(model(4)).to.lengthOf(38);
      });
    });
