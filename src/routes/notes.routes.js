const { Router } = require('express');
const notesRoutes = Router();

const NotesController = require('../controllers/NotesController.js');
const notesController = new NotesController();

notesRoutes.get('/:id', notesController.show);
notesRoutes.get('/', notesController.index);
notesRoutes.post('/:user_id', notesController.create);
notesRoutes.delete('/:id', notesController.delete);

module.exports = notesRoutes;