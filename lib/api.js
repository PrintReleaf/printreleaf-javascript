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
      resolveWithFullResponse: true
    };
    return rp(options).then((res) => {
      return res.body;
    });
  }
}

module.exports = Api;
// const options = {
//   uri: 'https://api.printreleaf.com/v1/accounts',
  // headers: {
//     'Authorization': 'Bearer ' + '7778653fa3e04b524f356305432723e4'
//   },
//   json: true,
//   resolveWithFullResponse: true
// }
// let request = rp(options).then((res) => {
//   console.log(res.statusCode)
//   console.log(res.body)
// });
