import * as express from "express";
import brandsController from "../controllers/brandsController";
import { asyncMiddleware } from "../middleware/async";
import auth from '../middleware/auth';

export default express
  .Router()
  .post("/add", auth,asyncMiddleware(brandsController.add))
  .delete("/delete",auth, asyncMiddleware(brandsController.delete))
  .put("/update",auth, asyncMiddleware(brandsController.update));
