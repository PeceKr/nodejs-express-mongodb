import * as express from "express";
import ordersController from "../controllers/ordersController";

export default express.Router()
.post('/new', ordersController.newOrder)
.post('/cancel',ordersController.cancelOrder)
.get('/all',ordersController.listOrders);
