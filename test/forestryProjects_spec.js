const expect = require('chai').expect;
const printreleaf = require('./testUtils').getSpyablePrintReleaf();

describe('ForestryProjects', () => {

  describe('#list', () => {
    it('yields a list of all forestry projects', () => {
      printreleaf.forestryProjects.list();
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/forestry/projects',
        data: {} 
      });
    });
  });

  describe('#find', () => {
    it('yields the forestry project associated with the given id', () => {
      const id = 'pants1234';
      printreleaf.forestryProjects.find(id);
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/forestry/projects/pants1234',
        data: {}
      });
    });
  });

});
