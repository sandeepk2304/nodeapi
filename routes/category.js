const router = require('express').Router();
// Import category controller
var categoryController = require('../controllers/category');
// category routes
router.route('/')
    .get(categoryController.index)
    .post(categoryController.new);

router.route('/:id')
    .get(categoryController.view)
    .patch(categoryController.update)
    .put(categoryController.update)
    .delete(categoryController.delete);

module.exports = router;