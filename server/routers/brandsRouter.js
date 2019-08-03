import * as express from 'express';
import brandsController from '../controllers/brandsController';

export default express
.Router()
.post('/add',brandsController.add)
.delete('/delete',brandsController.delete)
.put('/update',brandsController.update);