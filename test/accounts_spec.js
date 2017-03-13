const expect = require('chai').expect;
const printreleaf = require('./testUtils').getSpyablePrintReleaf();

describe('Accounts', () => {
  describe('#list', () => {
    it('yields a list of all accounts', () => {
      printreleaf.accounts.list({ page: 5 });
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/accounts',
        data: { page: 5 }
      });
    });
  });
  
  describe('#find', () => {
    it('yields the account assoicated with the given id', () => {
      printreleaf.accounts.find('pants1234');
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/accounts/pants1234',
        data: {}
      });
    });
  });    

  describe('#create', () => {
    it('yields the newly created account', () => {
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
    it('yields the newly updated account', () => {
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

  describe('#activate', () => {
    it('yeilds the activated account', () => {
      const id = 'pants1234';
      printreleaf.accounts.activate(id);
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/accounts/pants1234/activate',
        data: {}
      });
    });
  });
  
  describe('#deactivate', () => {
    it('yeilds the deactivated account', () => {
      const id = 'pants1234';
      printreleaf.accounts.deactivate(id);
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/accounts/pants1234/deactivate',
        data: {}
      });
    });
  });

});
