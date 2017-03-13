const expect = require('chai').expect;
const printreleaf = require('./testUtils').getSpyablePrintReleaf();

describe('Servers', () => {
  describe('#list', () => {
    it('yields a list of all servers', () => {
      printreleaf.servers.list({ page: 5 });
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/servers',
        data: { page: 5 }
      });
    });
  });
  
  describe('#find', () => {
    it('yields the server assoicated with the given id', () => {
      printreleaf.servers.find('pants1234');
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/servers/pants1234',
        data: {}
      });
    });
  });    

  describe('#create', () => {
    it('yields the newly created server', () => {
      const data = { name: 'pants' };
      printreleaf.servers.create(data);
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/servers',
        data: data 
      });
    });
  });    
  
  describe('#update', () => {
    it('yields the newly updated server', () => {
      const data = { name: 'pants' };
      const id = 'pants1234'
      printreleaf.servers.update(id, data);
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'PATCH',
        url: '/servers/pants1234',
        data: data 
      });
    });
  });    

  describe('#activate', () => {
    it('yeilds the activated server', () => {
      const id = 'pants1234';
      printreleaf.servers.activate(id);
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/servers/pants1234/activate',
        data: {}
      });
    });
  });
  
  describe('#deactivate', () => {
    it('yeilds the deactivated server', () => {
      const id = 'pants1234';
      printreleaf.servers.deactivate(id);
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/servers/pants1234/deactivate',
        data: {}
      });
    });
  });

});
