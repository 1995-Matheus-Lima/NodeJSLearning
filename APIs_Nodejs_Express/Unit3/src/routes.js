import { Router } from 'express';

const Routes = new Router;

Routes.get('/', (req,res) =>{
  return res.json({ok: false});
})

export default Routes;