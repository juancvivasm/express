import express from 'express';
const teachers = express.Router();

teachers.get('/', (req: any, res: any) => { 
    res.send('Teachers route')
});

export default teachers;