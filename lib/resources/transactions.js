const rp = require ('request-promise');

class Transactions {
  constructor(printreleaf) {
    this.printreleaf = printreleaf;
  }
  
  list(data={}) {
   return this.printreleaf.request('GET', '/transactions', data);
  }
  
  find(id) {
   return this.printreleaf.request('GET', `/transactions/${id}`);
  }

  create(data) {
   return this.printreleaf.request('POST', '/transactions', data);
  }

  delete(id) {
    return this.printreleaf.request('DELETE', `/transactions/${id}`);
  }
}

module.exports = Transactions;
