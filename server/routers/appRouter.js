import * as express from 'express';
import appController from '../controllers/appController';

export default express
.Router()
.get('/info',appController.info);