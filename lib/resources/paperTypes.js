const rp = require ('request-promise');

class PaperTypes {
  constructor(printreleaf) {
    this.printreleaf = printreleaf;
  }
  
  list(data={}) {
   return this.printreleaf.request('GET', '/paper/types', data);
  }
  
  find(id) {
   return this.printreleaf.request('GET', `/paper/types/${id}`);
  }

  create(data) {
   return this.printreleaf.request('POST', '/paper/types', data);
  }

  delete(id) {
    return this.printreleaf.request('DELETE', `/paper/types/${id}`);
  }
}

module.exports = PaperTypes;
