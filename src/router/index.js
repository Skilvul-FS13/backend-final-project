const express = require('express');
const route = express.Router();
const usersRoute = require('./usersRoute.js');

route.get('/', (req, res) => {
  res.json({
    message: 'welcome',
  });
});

route.use('/users', usersRoute);

module.exports = route;
