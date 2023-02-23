import express from 'express';
import logger from '../utilities/logger';
import teachers from './api/teachers';
import students from './api/students';
const routes = express.Router();

routes.get('/', logger, (req: express.Request, res: express.Response) => { 
    res.send('Main API route')
});

routes.use('/teachers', teachers);
routes.use('/students', students);

export default routes;