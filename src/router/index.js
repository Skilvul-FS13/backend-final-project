const express = require('express');
const route = express.Router();
const usersRoute = require('./usersRoute.js');
const postsRoute = require('./postsRoute.js');
const commentsRoute = require('./commentsRoute.js');

route.get('/', (req, res) => {
  res.json({
    message: 'welcome',
  });
});

route.use('/users', usersRoute);
route.use('/posts', postsRoute);
route.use('/comments', commentsRoute);

module.exports = route;
