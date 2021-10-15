import express from 'express';
import authController from '../../controllers/auth';
import  auth from '../../middleware/auth';

const router = express.Router();

router.post('/signup', authController.registerUser);
router.post('/login', authController.login);
router.get('/user', auth, authController.getUser)
router.patch('/user/:id', auth, authController.updateUser);

export default router;
