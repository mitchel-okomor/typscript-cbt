import express, {Application, Request, Response} from 'express';
import path from 'path';
import authRoutes from './auth';
 import adminRoutes from './admin/';
 import userRoutes from './user'
import auth from '../middleware/auth';

export default function (app: Application) {
  const homeRoutes = express.Router();
  const apiRoutes = express.Router();


  // API General Route

  homeRoutes.get('/', (req: Request, res:Response) => {
	  res.send("Welcome to cbt")
    // res.sendFile(path.join(__dirname, '../static/index.html'));
  });

//   // api Routes
 apiRoutes.use('/auth', authRoutes);
 apiRoutes.use('/admin', auth, adminRoutes);
 apiRoutes.use('/user', userRoutes);


  // Set url for API group routes
  app.use('/api', apiRoutes);
  app.use('/', homeRoutes);
}
