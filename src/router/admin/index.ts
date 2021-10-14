import express from 'express';
import categoryController from '../../controllers/admin/category.js';
import questionController from '../../controllers/admin/question';
import  auth from '../../middleware/auth';

const router = express.Router();

//Category
router.post('/category',auth, categoryController.create);
router.get('/category/:id',  categoryController.getCategory)
router.patch('/category/:id', auth, categoryController.update);
router.delete('/category/:id', categoryController.delete);

//Questions
router.post('/question', auth, questionController.create);
router.get('/question/:id', questionController.getQuestion);
router.get('/questions',  questionController.getAllQuestion);
router.patch('/question/:id', auth, questionController.updateQuestion);
router.delete('/question/:id', auth, questionController.deleteQuestion);


export default router;
