const rp = require ('request-promise');

class Servers {
  constructor(printreleaf) {
    this.printreleaf = printreleaf;
  }
  
  list(data={}) {
   return this.printreleaf.request('GET', '/servers', data);
  }
  
  find(id) {
   return this.printreleaf.request('GET', `/servers/${id}`);
  }
  
  create(data) {
   return this.printreleaf.request('POST', '/servers', data);
  }

  update(id, data) {
    return this.printreleaf.request('PATCH', `/servers/${id}`, data);
  }

  activate(id) {
    return this.printreleaf.request('POST', `/servers/${id}/activate`);
  }
  
  deactivate(id) {
    return this.printreleaf.request('POST', `/servers/${id}/deactivate`);
  }
}

module.exports = Servers;
