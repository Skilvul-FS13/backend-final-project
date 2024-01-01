const express = require('express');
const { donationGetaway } = require('../controller/donationController');

const auth = require('../middleware/auth');
const route = express.Router();

route.post('/', donationGetaway);

module.exports = route;
