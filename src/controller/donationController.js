const { User, Donations } = require('../models');

const donationGetaway = async (req, res) => {
  const data = req.body;
  const userId = req.params.id;
};

module.exports = { donationGetaway };
