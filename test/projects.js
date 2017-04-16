const expect = require('chai').expect;
const printreleaf = require('./testUtils').getSpyablePrintReleaf();

describe('Projects', () => {
  describe('#list', () => {
    it('yields a list of all projects', () => {
      printreleaf.projects.list();
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/forestry/projects',
        data: {}
      });
    });
  });
  describe('#find', () => {
    it('yields the project assoicated with the given id', () => {
      printreleaf.projects.find('pants1234');
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/forestry/projects/pants1234',
        data: {}
      });
    });
  });    
});
