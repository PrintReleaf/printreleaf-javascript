const expect = require('chai').expect;
const td = require('testdouble');
const Api = require('../lib/api')
const PrintReleaf = require('../lib/printReleaf')


describe('Api', () => {
  describe('Error handling', () => {
    const apiKey = 'pants';
    const printreleaf = new PrintReleaf(apiKey);

    it('is initialized with an API key', () => {
      expect(printreleaf.apiKey).to.equal(apiKey);
    });

    it('has a default path', () => {
      const expected = 'api.staging.printreleaf.com/v1';
      expect(printreleaf.path).to.equal(expected);
    });

    it('has an api', () => {
      expect(printreleaf.request).to.exist;
    });
  })
})
