const expect = require('chai').expect;
const printreleaf = require('./testUtils').getSpyablePrintReleaf();

describe('Certificates', () => {

  describe('#list', () => {
    it('yields a list of all certificates', () => {
      printreleaf.certificates.list({ page: 5 });
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/certificates',
        data: { page: 5 }
      });
    });
  });

  describe('#find', () => {
    it('yields the certificate associated with the given id', () => {
      const id = 'pants1234';
      printreleaf.certificates.find(id);
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/certificates/pants1234',
        data: {}
      });
    });
  });

});
