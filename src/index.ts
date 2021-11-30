
 import logger from 'morgan'; // For logging functionalities
 import express from 'express'; // REST API
 import cookieParser from 'cookie-parser'; // Cookie management
 import path from 'path'; // Path parser
 import cors from 'cors'; // CORS configurator
 import router from './router'; // Application routes
 require('dotenv').config();

 const app = express();
 const corsOptions = {
   origin: process.env.TEST_CLIENT,
 };
 
 app.use(logger('dev')); // Enable Logging
 
 app.use(cors(corsOptions)); // Enable CORS from client-side
 app.use(express.json());
 app.use(express.urlencoded({ extended: false }));
 app.use(cookieParser()); // Enable Cookie parser
 app.use(express.static(path.join(__dirname, '../public'))); // Enable assets from public folder
 
 //views
 app.set('views', path.join(__dirname, '../views'));
 app.set('view engine', 'pug');
 
 router(app);

 export default app;
 