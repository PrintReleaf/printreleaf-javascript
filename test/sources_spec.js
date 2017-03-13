const expect = require('chai').expect;
const printreleaf = require('./testUtils').getSpyablePrintReleaf();

describe('Server', () => {
  describe('#list', () => {
    it('yields a list of all sources', () => {
      printreleaf.sources.list({ page: 5 });
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/sources',
        data: { page: 5 }
      });
    });
  });
  
  describe('#find', () => {
    it('yields the source assoicated with the given id', () => {
      printreleaf.sources.find('pants1234');
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/sources/pants1234',
        data: {}
      });
    });
  });    

  describe('#create', () => {
    it('yields the newly created source', () => {
      const data = { name: 'pants' };
      printreleaf.sources.create(data);
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/sources',
        data: data 
      });
    });
  });    
  
  describe('#update', () => {
    it('yields the newly updated source', () => {
      const data = { name: 'pants' };
      const id = 'pants1234'
      printreleaf.sources.update(id, data);
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'PATCH',
        url: '/sources/pants1234',
        data: data 
      });
    });
  });    

  describe('#activate', () => {
    it('yeilds the activated source', () => {
      const id = 'pants1234';
      printreleaf.sources.activate(id);
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/sources/pants1234/activate',
        data: {}
      });
    });
  });
  
  describe('#deactivate', () => {
    it('yeilds the deactivated source', () => {
      const id = 'pants1234';
      printreleaf.sources.deactivate(id);
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/sources/pants1234/deactivate',
        data: {}
      });
    });
  });

});
