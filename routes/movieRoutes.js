const express = require('express');
const router = express.Router();
const controller = require('../controllers/movieController');

router.get('/',controller.getAllMovies);
router.get('/:id',controller.getMovieById);
router.post('/', controller.createMovie);
router.put('/:id', controller.updateMovie);
router.delete('/:id', controller.deleteMovie);

module.exports = router;