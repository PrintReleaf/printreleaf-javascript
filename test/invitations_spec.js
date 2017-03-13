const expect = require('chai').expect;
const printreleaf = require('./testUtils').getSpyablePrintReleaf();

describe('Invitations', () => {
  describe('#list', () => {
    it('yields a list of all invitations', () => {
      printreleaf.invitations.list({ page: 5 });
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/invitations',
        data: { page: 5 }
      });
    });
  });
  
  describe('#find', () => {
    it('yields the invitations assoicated with the given id', () => {
      printreleaf.invitations.find('pants1234');
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/invitations/pants1234',
        data: {}
      });
    });
  });    

  describe('#create', () => {
    it('yields the newly created invitations', () => {
      const data = { name: 'pants' };
      printreleaf.invitations.create(data);
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/invitations',
        data: data 
      });
    });
  });    

  describe('#delete', () => {
    it('yields the newly deleted invitations', () => {
      const id = 'pants1234'; 
      printreleaf.invitations.delete(id);
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/invitations/pants1234',
        data: {}
      });
    });
  });    

});
