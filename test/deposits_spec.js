const expect = require('chai').expect;
const printreleaf = require('./testUtils').getSpyablePrintReleaf();

describe('Deposits', () => {
  describe('#list', () => {
    it('yields a list of all deposits', () => {
      printreleaf.deposits.list({ page: 5 });
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/deposits',
        data: { page: 5 }
      });
    });
  });
  
  describe('#find', () => {
    it('yields the deposits assoicated with the given id', () => {
      printreleaf.deposits.find('pants1234');
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/deposits/pants1234',
        data: {}
      });
    });
  });    

  describe('#create', () => {
    it('yields the newly created deposits', () => {
      const data = { name: 'pants' };
      printreleaf.deposits.create(data);
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/deposits',
        data: data 
      });
    });
  });    

});
