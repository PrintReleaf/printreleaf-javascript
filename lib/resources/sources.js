const rp = require ('request-promise');

class Sources {
  constructor(printreleaf) {
    this.printreleaf = printreleaf;
  }
  
  list(data={}) {
   return this.printreleaf.request('GET', '/sources', data);
  }
  
  find(id) {
   return this.printreleaf.request('GET', `/sources/${id}`);
  }
  
  create(data) {
   return this.printreleaf.request('POST', '/sources', data);
  }

  update(id, data) {
    return this.printreleaf.request('PATCH', `/sources/${id}`, data);
  }

  activate(id) {
    return this.printreleaf.request('POST', `/sources/${id}/activate`);
  }
  
  deactivate(id) {
    return this.printreleaf.request('POST', `/sources/${id}/deactivate`);
  }
}

module.exports = Sources;
