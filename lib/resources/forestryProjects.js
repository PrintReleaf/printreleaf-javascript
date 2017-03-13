const rp = require ('request-promise');

class ForestryProjects {
  constructor(printreleaf) {
    this.printreleaf = printreleaf;
  }
  
  list(data={}) {
   return this.printreleaf.request('GET', '/forestry/projects', data);
  }
  
  find(id) {
   return this.printreleaf.request('GET', `/forestry/projects/${id}`);
  }

}

module.exports = ForestryProjects;
