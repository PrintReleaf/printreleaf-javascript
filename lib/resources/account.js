const rp = require ('request-promise');

class Account {
  constructor(printreleaf) {
    this.printreleaf = printreleaf;
  }

  mine() {
    return this.printreleaf.request('GET', '/account')
  }
}

module.exports = Account;
