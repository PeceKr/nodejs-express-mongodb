import * as express from "express";
import ordersController from "../controllers/ordersController";
import {asyncMiddleware}  from "../middleware/async";
import auth from '../middleware/auth';

export default express.Router()
.post('/new',auth, asyncMiddleware(ordersController.newOrder))
.post('/cancel',auth,asyncMiddleware(ordersController.cancelOrder))
.get('/all',auth,asyncMiddleware(ordersController.listOrders));
