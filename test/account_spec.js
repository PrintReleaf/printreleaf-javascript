const expect = require('chai').expect;
const printreleaf = require('./testUtils').getSpyablePrintReleaf();

describe('Account', () => {
  describe('#mine', () => {
    it('yields the account to which the api key belongs', () => {
      printreleaf.account.mine();
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/account',
        data: {}
      });
    });
  });
});
