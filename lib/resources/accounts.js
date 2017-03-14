const rp = require ('request-promise');

class Accounts {
  constructor(printreleaf) {
    this.printreleaf = printreleaf;
  }
  
  list(data={}) {
   return this.printreleaf.get('/accounts', data);
  }
  
  find(id) {
   return this.printreleaf.get(`/accounts/${id}`);
  }
  
  create(data) {
   return this.printreleaf.post('/accounts', data);
  }

  update(id, data) {
    return this.printreleaf.patch(`/accounts/${id}`, data);
  }

  activate(id) {
    return this.printreleaf.post(`/accounts/${id}/activate`);
  }
  
  deactivate(id) {
    return this.printreleaf.post(`/accounts/${id}/deactivate`);
  }
}

module.exports = Accounts;
