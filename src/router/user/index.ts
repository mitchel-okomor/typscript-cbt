import express from 'express';
import categoryController from '../../controllers/user/category';
import questionController from '../../controllers/user/questions';
import scoresController from '../../controllers/user/scores';
import userController from '../../controllers/user/user';
import  auth from '../../middleware/auth';

const router = express.Router();



//random user
router.get('/user/random', userController.getRandom);
//get user by email
// router.get('/user/:email',  userController.getByEmail);
// //get male user
// router.get('/user/male',  userController.getMale);
// //get female user
// router.get('/user/female',  userController.getFemale);

//Category
router.get('/categories', categoryController.getAll);
router.get('/category/:id',  categoryController.get);


//Questions
router.get('/question/:id', questionController.get);
router.get('/questions',  questionController.getAll);

//score
router.get('/scoreboard', scoresController.getAll);
router.get('/score', scoresController.getUserScores);
router.post('/score', auth, scoresController.save);


export default router;
