import * as express from "express";
import shoesController from "../controllers/shoesController";
import {asyncMiddleware}  from "../middleware/async";
import auth from '../middleware/auth';
export default express.Router().post("/insert",auth, asyncMiddleware(shoesController.insert));
