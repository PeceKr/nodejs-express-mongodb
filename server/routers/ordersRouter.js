import * as express from "express";
import ordersController from "../controllers/ordersController";
import {asyncMiddleware}  from "../middleware/async";

export default express.Router()
.post('/new', asyncMiddleware(ordersController.newOrder))
.post('/cancel',asyncMiddleware(ordersController.cancelOrder))
.get('/all',asyncMiddleware(ordersController.listOrders));
