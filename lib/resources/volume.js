const rp = require ('request-promise');

class Volume {
  constructor(printreleaf) {
    this.printreleaf = printreleaf;
  }
  
  list(data={}) {
   return this.printreleaf.request('GET', '/volume', data);
  }
  
}

module.exports = Volume;
