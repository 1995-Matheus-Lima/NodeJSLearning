import Express from 'express';
import Routes from './routes';

class App{
  constructor(){
    this.server = Express();

    this.middlewares();
    this.routes();
  }
  
  middlewares(){
    this.server.use(Express.json());
  }

  routes(){
    this.server.use(Routes);
  }
}

export default new App().server;