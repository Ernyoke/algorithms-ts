const prims = require('../../graphs/prims');
const assert = require('assert');

describe('graphs', function() {
  describe('#prims', function() {
    it('it should return works', function() {
      assert.equal(prims(), 'works');
    });
  });
});
