const rp = require ('request-promise');
const options = {
  uri: 'https://api.printreleaf.com/v1/accounts',
  headers: {
    'Authorization': 'Bearer ' + '7778653fa3e04b524f356305432723e4'
  },
  json: true,
  resolveWithFullResponse: true
}
let request = rp(options).then((res) => {
  console.log(res.statusCode)
  console.log(res.body)
});
