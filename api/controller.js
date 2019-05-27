const distance = require('../services/distance');
const {
  version,
  name
} = require('../package.json');


module.exports = {
  about: (req, res) => {
    res.json({
      version,
      name
    })
  },
  get_distance: (req, res) => {
    distance.find(req, res, (err, dist) => {
      if (err) {
        res.send(err)
      }
      res.json(dist)
    })
  }
}