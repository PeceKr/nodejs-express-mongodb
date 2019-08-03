import * as express from "express";
import shoesController from "../controllers/shoesController";
export default express.Router().post("/insert", shoesController.insert);
