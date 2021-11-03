import express from 'express';
import categoryController from '../../controllers/user/category';
import questionController from '../../controllers/user/questions';
import  auth from '../../middleware/auth';

const router = express.Router();

//Category
router.get('/categories', categoryController.getAll);
router.get('/category/:id',  categoryController.get);


//Questions
router.get('/question/:id', questionController.get);
router.get('/questions',  questionController.getAll);



export default router;
