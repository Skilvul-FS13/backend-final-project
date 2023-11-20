const express = require('express');

const auth = require('../middleware/auth');
const { getAllNews, getNewsById, addNews, deleteNews } = require('../controller/newsController');

const route = express.Router();

route.get('/', getAllNews);
route.get('/:id', getNewsById);
route.post('/', auth, addNews);
route.delete('/:id', auth, deleteNews);

module.exports = route;
