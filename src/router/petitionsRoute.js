const express = require('express');

const auth = require('../middleware/auth');
const { getAllPetition, getPetitionById, addPetition } = require('../controller/petitionsController');

const route = express.Router();

route.get('/', getAllPetition);
route.get('/:id', getPetitionById);
route.post('/', auth, addPetition);
route.put('/:id', auth);
// route.delete('/:id', auth, deleteNews);

module.exports = route;
