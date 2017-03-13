const expect = require('chai').expect;
const td = require('testdouble');
const PrintReleaf = require('../lib/printReleaf')

describe('PrintReleaf', () => {
  describe('#new', () => {
    const apiKey = 'pants';
    const printreleaf = new PrintReleaf(apiKey);

    it('is initialized with an API key', () => {
      expect(printreleaf.apiKey).to.equal(apiKey);
    });

    it('has a default path', () => {
      const expected = 'api.printreleaf.com/v1';
      expect(printreleaf.path).to.equal(expected);
    });
  })

  describe('#get', () => {
    const printreleaf = require('./testUtils').getSpyablePrintReleaf();
    printreleaf.get('/pants', { foo: 'bar' });
    
    it('makes a get request', () => {
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/pants',
        data: { foo: 'bar' }
      });
    });
  });

  describe('#post', () => {
    const printreleaf = require('./testUtils').getSpyablePrintReleaf();
    printreleaf.post('/pants', { foo: 'bar' })
    
    it('makes a post request', () => {
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/pants',
        data: { foo: 'bar' }
      });
    });
  });
  
  describe('#patch', () => {
    const printreleaf = require('./testUtils').getSpyablePrintReleaf();
    printreleaf.patch('/pants', { foo: 'bar' })

    it('makes a patch request', () => {
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'PATCH',
        url: '/pants',
        data: { foo: 'bar' }
      });
    });
  });

  describe('#delete', () => {
    const printreleaf = require('./testUtils').getSpyablePrintReleaf();
    printreleaf.delete('/pants')

    it('makes a delete request', () => {
      expect(printreleaf.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/pants',
        data: {}
      });
    });
  });
  
})
