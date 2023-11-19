const express = require('express');

const auth = require('../middleware/auth');
const { getAllComments, getCommentById, addComment } = require('../controller/commentController');
const route = express.Router();

route.get('/', getAllComments);
route.get('/:id', getCommentById);
route.post('/', auth, addComment);
// route.put('/:id', auth, );
// route.delete('/:id', auth, );

module.exports = route;
