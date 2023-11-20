const express = require('express');

const auth = require('../middleware/auth');
const { getAllSignature, addSignature, deleteSignature } = require('../controller/signatureController');

const route = express.Router();

route.get('/', getAllSignature);
route.post('/', addSignature);
route.delete('/:id', auth, deleteSignature);

module.exports = route;
