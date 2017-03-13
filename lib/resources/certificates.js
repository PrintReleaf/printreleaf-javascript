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

}

module.exports = Certificates;
