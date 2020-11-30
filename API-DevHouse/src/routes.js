// const { Router } = require('express');
import { Router } from 'express';
import SessionController from './controllers/SessionController'

const routes = new Router();

routes.post('/sessions', SessionController.store);

// routes.get('/dev', (req, res) => {
//     return res.json({ok: true})
// })

// module.exports = routes;
export default routes;