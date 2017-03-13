'use strict';

const Accounts = require('../lib/resources/accounts')
const Certificates = require('../lib/resources/certificates')
const Deposits = require('../lib/resources/deposits')
const Invitations = require('../lib/resources/invitations')

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

  get certificates() {
    return new Certificates(this);
  }

  get deposits() {
    return new Deposits(this);
  }

  get invitations() {
    return new Invitations(this);
  }
}
module.exports = PrintReleaf;
