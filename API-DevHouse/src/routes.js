// const { Router } = require('express');
import { Router } from 'express';
import SessionController from './controllers/SessionController';
import HouseController from './controllers/HouseController';
import DashboardController from './controllers/DashboardController';
import ReserveController from './controllers/ReserveController';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.get('/sessions', SessionController.users);
routes.post('/houses', HouseController.create);
routes.get('/houses/index', HouseController.getIndex);
routes.put('/houses/:id', HouseController.update);
routes.delete('/houses/:id', HouseController.delete); //passando via params
routes.delete('/houses', HouseController.delete); //passando via body
routes.get('/housesAll', DashboardController.getHousesAll);
routes.get('/houses', DashboardController.getHouseById);
routes.post('/houses/:house_id/reserve', ReserveController.create);

// routes.get('/dev', (req, res) => {
//     return res.json({ok: true})
// })

// module.exports = routes;
export default routes;