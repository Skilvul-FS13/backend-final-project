const express = require('express');
const route = express.Router();
const usersRoute = require('./usersRoute.js');
const postsRoute = require('./postsRoute.js');
const commentsRoute = require('./commentsRoute.js');
const likesRoute = require('./likesRoute.js');
const newsRoute = require('./newsRoute.js');

route.get('/', (req, res) => {
  res.json({
    message: 'welcome',
  });
});

route.use('/users', usersRoute);
route.use('/posts', postsRoute);
route.use('/likes', likesRoute);
route.use('/comments', commentsRoute);
route.use('/news', newsRoute);

module.exports = route;
