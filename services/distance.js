const request = require('request');
const dotenv = require('dotenv');
dotenv.config();

const getApiUrl = req => [
  process.env.ZIP_CODE_API_URL,
  process.env.ZIP_CODE_API_KEY,
  'distance.json',
  req.params.zipcode1,
  req.params.zipcode2,
  'mile'
].join('/');

const find = (req, res, cb) => {
  request(getApiUrl(req), (err, response, body) => {
    let distanceData = {
      distance: -1
    };
    if (!err) {
      try {
        distanceData = JSON.parse(body)
      } catch (error) {
        console.log({
          error
        })
      }
    }
    console.log({
      err, distanceData, body, code: response.code
    })
    cb(err, distanceData)
  });
};

module.exports = {
  find
}