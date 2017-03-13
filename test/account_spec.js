const expect = require('chai').expect;
const printreleaf = require('./testUtils').getSpyablePrintReleaf();

describe('Account', () => {
  describe('#list', () => {
    it('returns a list of all accounts', () => {
      printreleaf.accounts.list({ page: 5 });
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/accounts',
        data: { page: 5 }
      });
    });
  });
  
  describe('#find', () => {
    it('returns an account assoicated with the given id', () => {
      printreleaf.accounts.find('pants1234');
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/accounts/pants1234',
        data: {}
      });
    });
  });    

  describe('#create', () => {
    it('returns a newly created account', () => {
      const data = { name: 'pants' };
      printreleaf.accounts.create(data);
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/accounts',
        data: data 
      });
    });
  });    
  
  describe('#update', () => {
    it('returns a newly updated account', () => {
      const data = { name: 'pants' };
      const id = 'pants1234'
      printreleaf.accounts.update(id, data);
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'PATCH',
        url: '/accounts/pants1234',
        data: data 
      });
    });
  });    

});
