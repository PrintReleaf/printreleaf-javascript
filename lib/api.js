'use strict'
const rp = require ('request-promise');

class Api {
  constructor(printreleaf) {
    this.printReleaf = printreleaf;
  }

  request(verb, path, data) {
    const options = {
      uri: 'https://' + this.printReleaf.path + path,
      headers: {
        'Authorization': 'Bearer ' + this.printReleaf.apiKey
      },
      json: true,
    };
    return rp(options);
  }
}

module.exports = Api;
