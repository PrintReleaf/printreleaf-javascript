const rp = require ('request-promise');

class Projects {
  constructor(printreleaf) {
    this.printreleaf = printreleaf;
  }
  
  list(data={}) {
   return this.printreleaf.request('GET', '/projects', data);
  }
  
}

module.exports = Projects;
