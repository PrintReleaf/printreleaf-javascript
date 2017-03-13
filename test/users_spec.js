const expect = require('chai').expect;
const printreleaf = require('./testUtils').getSpyablePrintReleaf();

describe('Users', () => {
  describe('#list', () => {
    it('yields a list of all users', () => {
      printreleaf.users.list({ page: 5 });
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/users',
        data: { page: 5 }
      });
    });
  });
  
  describe('#find', () => {
    it('yields the users assoicated with the given id', () => {
      printreleaf.users.find('pants1234');
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/users/pants1234',
        data: {}
      });
    });
  });    

  describe('#delete', () => {
    it('yields the newly deleted users', () => {
      const id = 'pants1234'; 
      printreleaf.users.delete(id);
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/users/pants1234',
        data: {}
      });
    });
  });    

});
