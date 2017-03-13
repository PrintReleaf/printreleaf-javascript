'use strict';

const Account = require('../lib/resources/account')
const Accounts = require('../lib/resources/accounts')
const Certificates = require('../lib/resources/certificates')
const Deposits = require('../lib/resources/deposits')
const ForestryProjects = require('../lib/resources/forestry/projects')
const Invitations = require('../lib/resources/invitations')
const Servers = require('../lib/resources/servers')
const Sources = require('../lib/resources/sources')
const Transactions = require('../lib/resources/transactions')
const Users = require('../lib/resources/users')
const Volume = require('../lib/resources/volume')

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
  
  get account() {
    return new Account(this);
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

  get servers() {
    return new Servers(this);
  }

  get sources() {
    return new Sources(this);
  }

  get transactions() {
    return new Transactions(this);
  }

  get users() {
    return new Users(this);
  }

  get volume() {
    return new Volume(this);
  }
  
  get forestryProjects() {
    return new ForestryProjects(this);
  }
}
module.exports = PrintReleaf;
