import * as express from 'express';
import usersController from '../controllers/usersController';

export default express 
.Router()
.post('/register',usersController.registerUser)
.post('/login',usersController.login)

