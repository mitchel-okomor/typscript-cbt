import express from 'express';
import gameController from '../../controllers/game/index';
import  auth from '../../middleware/auth';

const router = express.Router();

//Game controller
router.post('/start-game', gameController.start);
router.get('/acceptChallenge/:id', gameController.acceptChallenge);
// router.post('/set-turn/:gameId', gameController.setTurn);
// router.post('/status/:gameId',  gameController.changeStatus);
router.post('/submit-answer/:gameId', gameController.submitAnswer);




export default router;
