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
});
