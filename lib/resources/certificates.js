const rp = require ('request-promise');

class Certificates {
  constructor(printreleaf) {
    this.printreleaf = printreleaf;
  }
  
  list(data={}) {
   return this.printreleaf.request('GET', '/certificates', data);
  }
  
  find(id) {
   return this.printreleaf.request('GET', `/certificates/${id}`);
  }
  
  create(data) {
   return this.printreleaf.request('POST', '/accounts', data);
  }

  update(id, data) {
    return this.printreleaf.request('PATCH', `/accounts/${id}`, data);
  }

  activate(id) {
    return this.printreleaf.request('POST', `/accounts/${id}/activate`);
  }
  
  deactivate(id) {
    return this.printreleaf.request('POST', `/accounts/${id}/deactivate`);
  }
}

module.exports = Certificates;
