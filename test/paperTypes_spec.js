const expect = require('chai').expect;
const printreleaf = require('./testUtils').getSpyablePrintReleaf();

describe('PaperTypes', () => {
  describe('#list', () => {
    it('yields a list of all paper types', () => {
      printreleaf.paperTypes.list();
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/paper/types',
        data: {}
      });
    });
  });
  
  describe('#find', () => {
    it('yields the paper type assoicated with the given id', () => {
      printreleaf.paperTypes.find('pants1234');
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/paper/types/pants1234',
        data: {}
      });
    });
  });    

  describe('#create', () => {
    it('yields the newly created paper type', () => {
      const data = { name: 'pants' };
      printreleaf.paperTypes.create(data);
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/paper/types',
        data: data 
      });
    });
  });    

  describe('#delete', () => {
    it('yields the newly deleted paper type', () => {
      const id = 'pants1234'; 
      printreleaf.paperTypes.delete(id);
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/paper/types/pants1234',
        data: {}
      });
    });
  });    

});
