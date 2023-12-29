const express = require('express');

const auth = require('../middleware/auth');
const route = express.Router();

route.get('/', donationGetaway);

module.exports = route;
