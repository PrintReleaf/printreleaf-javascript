'use strict';
require('mocha');

module.exports = {
  getSpyablePrintReleaf: function() {
    const PrintReleaf = require('../lib/printreleaf');
    const printReleafInstance = new PrintReleaf('pants');
    printReleafInstance.request = function (method, url, data={}) {
      printReleafInstance.LAST_REQUEST = {
        method: method,
        url: url,
        data: data
      }
    };
    
    return printReleafInstance;
  }
}
