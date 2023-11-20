const express = require('express');

const auth = require('../middleware/auth');
const { getAllCategories, getCategoryById } = require('../controller/categoryController');
const route = express.Router();

route.get('/', getAllCategories);
route.get('/:id', getCategoryById);
// route.post('/', auth, addComment);
// route.put('/:id', auth, editComment);
// route.delete('/:id', auth, deleteComment);

module.exports = route;
