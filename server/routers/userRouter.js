import * as express from 'express';
import usersController from '../controllers/usersController';
import {asyncMiddleware}  from "../middleware/async";

export default express 
.Router()
.post('/register',asyncMiddleware(usersController.registerUser))
.post('/login',asyncMiddleware(usersController.login))

