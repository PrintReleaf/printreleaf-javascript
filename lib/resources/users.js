const rp = require ('request-promise');

class Users {
  constructor(printreleaf) {
    this.printreleaf = printreleaf;
  }
  
  list(data={}) {
   return this.printreleaf.request('GET', '/users', data);
  }
  
  find(id) {
   return this.printreleaf.request('GET', `/users/${id}`);
  }

  delete(id) {
    return this.printreleaf.request('DELETE', `/users/${id}`);
  }
}

module.exports = Users;
