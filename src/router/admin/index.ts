import express from 'express';
import categoryController from '../../controllers/admin/category.js';
import questionController from '../../controllers/admin/question';
import  auth from '../../middleware/auth';

const router = express.Router();

//Category
router.post('/category', categoryController.create);
router.get('/category/:id', auth, categoryController.getCategory)
router.patch('/category/:id', auth, categoryController.update);
router.delete('/category/:id', auth, categoryController.delete);

//Questions
router.post('/question', questionController.create);
router.get('/question/:id', auth, questionController.getQuestion);
router.get('/questions', auth, questionController.getAllQuestion);
router.patch('/question/:id', auth, questionController.updateQuestion);
router.delete('/question/:id', auth, questionController.deleteQuestion);


export default router;
