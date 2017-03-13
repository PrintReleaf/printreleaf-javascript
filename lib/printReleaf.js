'use strict';

const Accounts = require('../lib/resources/accounts')

class PrintReleaf {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.path = 'api.printreleaf.com/v1';
  }
  
  get(path, data) {
    return this.request('GET', path, data);
  }
  
  post(path, data) {
    return this.request('POST', path, data);
  }

  patch(path, data) {
   return this.request('PATCH', path, data);
  }


  delete(path) {
    return this.request('DELETE', path);
  }
  
  get accounts() {
    return new Accounts(this);
  }

}
module.exports = PrintReleaf;
