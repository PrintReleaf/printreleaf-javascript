const rp = require ('request-promise');

class Accounts {
  constructor(printreleaf) {
    this.printreleaf = printreleaf;
  }
  
  list(data={}) {
   return this.printreleaf.request('GET', '/accounts', data);
  }
  
  find(id) {
   return this.printreleaf.request('GET', `/accounts/${id}`);
  }
  
  create(data) {
   return this.printreleaf.request('POST', '/accounts', data);
  }

  update(id, data) {
    return this.printreleaf.request('PATCH', `/accounts/${id}`, data);
  }
}

module.exports = Accounts;
