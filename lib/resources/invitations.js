const rp = require ('request-promise');

class Invitations {
  constructor(printreleaf) {
    this.printreleaf = printreleaf;
  }
  
  list(data={}) {
   return this.printreleaf.request('GET', '/invitations', data);
  }
  
  find(id) {
   return this.printreleaf.request('GET', `/invitations/${id}`);
  }

  create(data) {
   return this.printreleaf.request('POST', '/invitations', data);
  }

  delete(id) {
    return this.printreleaf.request('DELETE', `/invitations/${id}`);
  }
}

module.exports = Invitations;
