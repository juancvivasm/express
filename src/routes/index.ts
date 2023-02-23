import express from 'express';
const routes = express.Router();

routes.get('/', (req: any, res: any) => { 
    res.send('Main API route')
});

export default routes;