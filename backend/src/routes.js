const { Router } = require('express');
const ContactController = require('./app/controllers/ContactController');
const CategoriesController = require('./app/controllers/CategoryController');

const router = Router();

router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);

router.get('/categories/', CategoriesController.index);
router.post('/categories/', CategoriesController.store);
router.delete('/categories/:id', CategoriesController.delete);

module.exports = router;
