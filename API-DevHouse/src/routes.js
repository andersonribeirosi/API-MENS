// const { Router } = require('express');
import { Router } from 'express';
import SessionController from './controllers/SessionController';
import HouseController from './controllers/HouseController'

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.get('/sessions', SessionController.users);
routes.get('/houses', HouseController.getHouses);
routes.post('/houses', HouseController.store);
routes.get('/houses/index', HouseController.getIndex);
routes.put('/houses/:id', HouseController.update);

// routes.get('/dev', (req, res) => {
//     return res.json({ok: true})
// })

// module.exports = routes;
export default routes;