import * as express from "express";
import brandsController from "../controllers/brandsController";
import { asyncMiddleware } from "../middleware/async";

export default express
  .Router()
  .post("/add", asyncMiddleware(brandsController.add))
  .delete("/delete", asyncMiddleware(brandsController.delete))
  .put("/update", asyncMiddleware(brandsController.update));
