const rp = require ('request-promise');

class Projects {
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

module.exports = Projects;
