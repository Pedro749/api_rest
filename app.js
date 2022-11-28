import dotenv from 'dotenv';
import express from 'express';
import home from './src/routes/homeRoutes';
import user from './src/routes/userRoutes';
import './src/database';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', home);
    this.app.use('/users/', user);
  }
}

export default new App().app;
