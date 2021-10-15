import express from 'express';
import categoryController from '../../controllers/admin/category';
import questionController from '../../controllers/admin/question';
import  auth from '../../middleware/auth';

const router = express.Router();

//Category
router.post('/category', categoryController.create);
router.get('/categories', categoryController.getAll);
router.get('/category/:id',  categoryController.get);
router.patch('/category/:id',  categoryController.update);
router.delete('/category/:id', categoryController.delete);

//Questions
router.post('/question',  questionController.create);
router.get('/question/:id', questionController.get);
router.get('/questions',  questionController.getAll);
router.patch('/question/:id',  questionController.update);
router.delete('/question/:id',  questionController.delete);


export default router;
