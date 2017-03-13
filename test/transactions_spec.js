const expect = require('chai').expect;
const printreleaf = require('./testUtils').getSpyablePrintReleaf();

describe('Transactions', () => {
  describe('#list', () => {
    it('yields a list of all transactions', () => {
      printreleaf.transactions.list({ page: 5 });
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/transactions',
        data: { page: 5 }
      });
    });
  });
  
  describe('#find', () => {
    it('yields the transactions assoicated with the given id', () => {
      printreleaf.transactions.find('pants1234');
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/transactions/pants1234',
        data: {}
      });
    });
  });    

  describe('#create', () => {
    it('yields the newly created transactions', () => {
      const data = { name: 'pants' };
      printreleaf.transactions.create(data);
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/transactions',
        data: data 
      });
    });
  });    

  describe('#delete', () => {
    it('yields the newly deleted transactions', () => {
      const id = 'pants1234'; 
      printreleaf.transactions.delete(id);
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/transactions/pants1234',
        data: {}
      });
    });
  });    

});
