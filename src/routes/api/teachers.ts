import express from 'express';
import logger from '../../utilities/logger';
const teachers = express.Router();

teachers.get('/', logger, (req: express.Request, res: express.Response) => { 
    res.send('Teachers route')
});

export default teachers;