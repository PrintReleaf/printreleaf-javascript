const expect = require('chai').expect;
const printreleaf = require('./testUtils').getSpyablePrintReleaf();

describe('Volume', () => {

  describe('#list', () => {
    it('yields a list of all volume history summarized by period', () => {
      printreleaf.volume.list({ period: 'monthly' });
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/volume',
        data: { period: 'monthly' }
      });
    });
  });
});
