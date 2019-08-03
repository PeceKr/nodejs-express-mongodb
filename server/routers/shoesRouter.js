import * as express from "express";
import shoesController from "../controllers/shoesController";
import {asyncMiddleware}  from "../middleware/async";

export default express.Router().post("/insert", asyncMiddleware(shoesController.insert));
