const rp = require ('request-promise');

class Deposits {
  constructor(printreleaf) {
    this.printreleaf = printreleaf;
  }
  
  list(data={}) {
   return this.printreleaf.request('GET', '/deposits', data);
  }
  
  find(id) {
   return this.printreleaf.request('GET', `/deposits/${id}`);
  }

  create(data) {
   return this.printreleaf.request('POST', '/deposits', data);
  }

}

module.exports = Deposits;
