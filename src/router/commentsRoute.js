const express = require('express');

const auth = require('../middleware/auth');
const { getAllComments, getCommentById, addComment, deleteComment, editComment } = require('../controller/commentController');
const route = express.Router();

route.get('/', getAllComments);
route.get('/:id', getCommentById);
route.post('/', auth, addComment);
route.put('/:id', auth, editComment);
route.delete('/:id', auth, deleteComment);

module.exports = route;
