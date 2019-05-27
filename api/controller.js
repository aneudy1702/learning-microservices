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
    res.json({
      distance: {
        far: true
      }
    })
  }
}